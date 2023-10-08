
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import demoOrders from '../../demoData/ordersDemoData.js'

const STORAGE_KEY = 'orderDB'

_createOrders()

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
}
// window.cs = gigService

async function query(filterBy = {}) {
    try {
        let orders = await storageService.query(STORAGE_KEY)
        console.log(orders)
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            orders = orders.filter(order => order.gig.title.regex.test(regex))
        }

        return orders
    } catch (err) {
        throw err
    }
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    let savedOrder
    console.log(order, 'order in service')
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
    } else {
        // Later, owner is set by the backend
        order.buyer = userService.getLoggedinUser()
        savedOrder = await storageService.post(STORAGE_KEY, order)
    }
    return savedOrder
}

// export function getDefaultFilter() {
//     return { minPrice: '', maxPrice: '', txt: '' }
// }

// async function addGigMsg(gigId, txt) {
//     // Later, this is all done by the backend
//     const gig = await getById(gigId)
//     if (!gig.msgs) gig.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     gig.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, gig)

//     return msg
// }

function getEmptyOrder() {
    return { buyer: {}, seller: {}, gig: {} }
}

function _createOrders() {
    let orders = utilService.loadFromStorage(STORAGE_KEY)
    if (!orders || !orders.length) {
        orders = demoOrders
        utilService.saveToStorage(STORAGE_KEY, orders)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {title: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




