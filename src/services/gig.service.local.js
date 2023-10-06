
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import demoGigs from '../../demoData/gigDemoData.js'

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
window.cs = gigService

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
        gig.owner = userService.getLoggedinUser()
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
    return {
        title: 'Gig-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(10, 90),
        packages: {
            basic: {
                desc: 'Enter description',
                features: ['1 page', 'Design customization', 'Content upload', 'Responsive design', 'Source code', 'Detailed code comments']
            }
        },
        description: 'Description goes here',
        imgUrls: [
            "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/292211335/original/dacf3630a805a565a36cdf0af7118d7e289b9982/be-your-pro-tiktok-editor-for-all-your-tiktok-needs.jpg",
            "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/292211335/original/f3167f823285d2c3c64a2d6d8535512dc4dd3bee/be-your-pro-tiktok-editor-for-all-your-tiktok-needs.jpg",
            "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/53382a1f054d78854910ced5344a4388-1672934713/thumbnail-1637/do-professional-youtube-video-editing-within-24hrs.jpg"
        ],
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




