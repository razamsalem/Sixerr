
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.http.js'
import demoOrders from '../../demoData/ordersDemoData.js'
import { httpService } from './http.service.js'

export const orderService = {
    query,
    save,
    getEmptyOrder,
}

async function query(filterBy = {}) {
    try {
        const orders = await httpService.get('order', filterBy)

        return orders
    } catch (err) {
        throw err
    }
}

async function save(order) {
    let savedOrder
    if (order._id) {
        savedOrder = await httpService.put('order', order)
    } else {
        savedOrder = await httpService.post('order', order)
    }
    return savedOrder
}

function getEmptyOrder() {
    return { buyer: {}, seller: {}, gig: {}, status: "pending" }
}


