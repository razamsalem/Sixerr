
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import demoGigs from '../../demoData/gigDemoData.js'
// console.log(demoGigs);
const STORAGE_KEY = 'gigDB'

_createGigs()

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    getDefaultFilter,
    // addGigMsg
}
window.gs = gigService

async function query(filterBy = { txt: '', minPrice: '', maxPrice: '' }) {
    let gigs = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => gig.tags.some(tag => regex.test(tag)))
    }
    if (filterBy.minPrice) {
        gigs = gigs.filter(gig => gig.price >= filterBy.minPrice)
    }
    if (filterBy.maxPrice) {
        gigs = gigs.filter(gig => gig.price <= filterBy.maxPrice)
    }
    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        // Later, owner is set by the backend
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

export function getDefaultFilter() {
    return { minPrice: '', maxPrice: '', txt: '' }
}

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

function getEmptyGig() {
    let owner = userService.getLoggedinUser()
    owner.rate = 4.9

    return {
        owner,
        title: 'I Will..',
        price: 0,
        packages: {
            basic: {
                desc: 'Basic package',
                features: ['1 page', 'Design customization', 'Content upload', 'Responsive design', 'Source code', 'Detailed code comments']
            }
        },
        daysToMake: 0,
        description: '',
        imgUrls: [
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/53382a1f054d78854910ced5344a4388-1672934713/thumbnail-1637/do-professional-youtube-video-editing-within-24hrs.jpg"
        ],
        tags: [
            "service",
        ],
        likedByUsers: ['mini-user']
    }
}

function _createGigs() {
    let gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!gigs || !gigs.length) {
        gigs = demoGigs
        utilService.saveToStorage(STORAGE_KEY, gigs)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {title: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




