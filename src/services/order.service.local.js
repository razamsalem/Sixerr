
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.http.js'
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

async function query(filterBy = {}) {
    try {
        const loggedUser = userService.getLoggedinUser()
        let orders = []

        if (loggedUser) {
            orders = await storageService.query(STORAGE_KEY)
            orders = orders.filter(order => order.seller._id === loggedUser._id || order.buyer._id === loggedUser._id)
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
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
    } else {
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

