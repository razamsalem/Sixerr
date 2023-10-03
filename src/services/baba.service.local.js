
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'baba'

export const babaService = {
    query,
    getById,
    save,
    remove,
    getEmptyBaba,
    addBabaMsg
}
// debug trick
window.bs = babaService


async function query(filterBy = { txt: '', price: 0 }) {
    var babas = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        babas = babas.filter(baba => regex.test(baba.title) || regex.test(baba.description))
    }
    if (filterBy.price) {
        babas = babas.filter(baba => baba.price <= filterBy.price)
    }
    return babas
}

function getById(babaId) {
    return storageService.get(STORAGE_KEY, babaId)
}

async function remove(babaId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, babaId)
}

async function save(baba) {
    var savedBaba
    if (baba._id) {
        savedBaba = await storageService.put(STORAGE_KEY, baba)
    } else {
        // Later, owner is set by the backend
        baba.owner = userService.getLoggedinUser()
        savedBaba = await storageService.post(STORAGE_KEY, baba)
    }
    return savedBaba
}

async function addBabaMsg(babaId, txt) {
    // Later, this is all done by the backend
    const baba = await getById(babaId)
    if (!baba.msgs) baba.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    baba.msgs.push(msg)
    await storageService.put(STORAGE_KEY, baba)

    return msg
}

function getEmptyBaba() {
    return {
        title: 'Baba-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {title: 'Jira G', price: 980}).then(x => console.log(x))




