
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import demoGigs from '../../demoData/gigDemoData.js'
// console.log(demoGigs);
const STORAGE_KEY = 'gigDB'

_createGigs()

const categories = [
    { category: "Graphics & Design", tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design', 'Landing Page Design', 'Icon Design', 'Portraits & Caricatures'] },
    { category: "Programming & Tech", tags: ['Website Development', 'Business Websites', 'E-Commerce Development', 'Landing Pages', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers', 'AI Services', 'Wordpress'] },
    { category: "Digital Marketing", tags: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Local SEO", "E-Commerce SEO", "Video SEO", "Email Marketing", "Guest Posting", "Affiliate Marketing"] },
    { category: "Video & Animation", tags: ["Video Editing", "Visual Effects", "Video Art", "Logo Animation", "Character Animation", "Animated GIFs"] },
    { category: "Writing & Translation", tags: ["Articles & Blog Posts", "Content Strategy", "Proofreading & Editing", "AI Content Editing", "Book Editing", "Beta Reading", "Writing Advice", "Career Writing", "Resume Writing", "Cover Letters", "LinkedIn Profiles"] },
    { category: "Music & Audio", tags: ["Music Production & Writing", "Producers & Composers", "Singers & Vocalists", "Session Musicians", "Songwriters", "Beat Making", "Voice Over & Narration", "DJing", "DJ Drops & Tags", "DJ Mixing", "Remixing & Mashups", "Mixing & Mastering", "Audio Editing"] },
    { category: "Business", tags: ["General & Administrative Virtual Assistant", "E-Commerce Management", "HR Consulting", "Project Management", "Business Formation", "Business Registration"] },
    { category: "Data", tags: ["Data Science & ML", "Machine Learning", "Data Collection", "Data Entry", "Data Mining & Scraping", "Data Annotation"] },
    { category: "Photography", tags: ["Products & Lifestyle", "Product Photographers", "Food Photographers", "Lifestyle & Fashion Photographers", "Portrait Photographers", "Event Photographers", "Real Estate Photographers", "Scenic Photographers"] }
]

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    getDefaultFilter,
    categories
}
window.gs = gigService

async function query(filterBy = { txt: '', minPrice: '', maxPrice: '', category: '', tags: '' }) {
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
    if (filterBy.category) {
        gigs = gigs.filter(gig => gig.category === filterBy.category)
    }
    if (filterBy.tags) {
        gigs = gigs.filter(gig => {
            return gig.tags.includes(filterBy.tags)
        })
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
    let savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

export function getDefaultFilter() {
    return { minPrice: '', maxPrice: '', txt: '', category: '', tags: '' }
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
        title: 'I will ',
        price: 5,
        packages: {
            basic: {
                desc: 'Basic package',
                features: ['1 page', 'Design customization', 'Content upload', 'Responsive design', 'Source code', 'Detailed code comments']
            }
        },
        daysToMake: 1,
        description: '',
        imgUrls: [],
        category: '',
        tags: [],
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




