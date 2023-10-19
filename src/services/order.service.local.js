
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
        const loggedUser = userService.getLoggedinUser()
        let orders = []

        if (loggedUser) {
            orders = await storageService.query(STORAGE_KEY)
            orders = orders.filter(order => order.seller._id === loggedUser._id || order.buyer._id === loggedUser._id)
        }

        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            orders = orders.filter(order => order.gig.title.regex.test(regex))
        }

        return orders
    } catch (err) {
        throw err
    }
}

async function getById(orderId) {
    return await storageService.get(STORAGE_KEY, orderId)
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

function getEmptyOrder() {
    return { buyer: {}, seller: {}, gig: {}, status: "pending" }
}

function _createOrders() {
    let orders = utilService.loadFromStorage(STORAGE_KEY)
    if (!orders || !orders.length) {
        orders = demoOrders
        utilService.saveToStorage(STORAGE_KEY, orders)
    }
}
