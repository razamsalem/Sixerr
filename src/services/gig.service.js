
// import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.http.js'
import { httpService } from './http.service.js'
const STORAGE_KEY = 'gig'

// _createGigs()

const categories = [
    { category: 'Graphics & Design', tags: ['Logo Design', 'Website Design', 'App Design', 'UX Design', 'Brand Style Guides', 'Landing Page Design', 'Icon Design', 'Portraits & Caricatures', 'Illustration'] },
    { category: 'Programming & Tech', tags: ['Website Development', 'Business Websites', 'E-Commerce Development', 'Landing Pages', 'Web Applications', 'HTML & CSS Developers', 'JavaScript Developers', 'AI Services', 'Wordpress'] },
    { category: 'Digital Marketing', tags: ['Video Marketing', 'E-Commerce Marketing', 'Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)', 'Social Media Marketing', 'Organic Social Promotions', 'Local SEO', 'E-Commerce SEO', 'Video SEO', 'Email Marketing', 'Guest Posting', 'Affiliate Marketing', 'SEO', 'Social Media'] },
    { category: 'Video & Animation', tags: ['Video Editing', 'Visual Effects', 'Video Art', 'Logo Animation', 'Character Animation', 'Animated GIFs', 'Video Explainer'] },
    { category: 'Writing & Translation', tags: ['Articles & Blog Posts', 'Content Strategy', 'Proofreading & Editing', 'AI Content Editing', 'Book Editing', 'Beta Reading', 'Writing Advice', 'Career Writing', 'Resume Writing', 'Cover Letters', 'LinkedIn Profiles', 'Translation'] },
    { category: 'Music & Audio', tags: ['Music Production & Writing', 'Producers & Composers', 'Singers & Vocalists', 'Session Musicians', 'Songwriters', 'Beat Making', 'Voice Over & Narration', 'DJing', 'DJ Drops & Tags', 'DJ Mixing', 'Remixing & Mashups', 'Mixing & Mastering', 'Audio Editing', 'Voice Over'] },
    { category: 'Business', tags: ['General & Administrative Virtual Assistant', 'E-Commerce Management', 'HR Consulting', 'Project Management', 'Business Formation', 'Business Registration'] },
    { category: 'Data', tags: ['Data Science & ML', 'Machine Learning', 'Data Collection', 'Data Entry', 'Data Mining & Scraping', 'Data Annotation'] },
    { category: 'Photography', tags: ['Products & Lifestyle', 'Product Photographers', 'Food Photographers', 'Lifestyle & Fashion Photographers', 'Portrait Photographers', 'Event Photographers', 'Real Estate Photographers', 'Scenic Photographers'] },
    { category: 'AI Services', tags: ['AI Applications', 'ChatGPT Applications', 'AI Websites', 'AI Chatbots', 'Midjourney Artists', 'DALL-E Artists', 'Stable Diffusion Artists', 'Food Photographers', 'AI Video Art', 'AI Music Videos', 'Voice Synthesis & AI', 'AI Artists'] }
]


export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    getDefaultFilter,
    categories,
    getCategories
}
window.gs = gigService

async function query(filterBy = { txt: '', minPrice: null, maxPrice: null, category: '', tags: [] }) {
    return httpService.get(STORAGE_KEY, filterBy)
    // let gigs = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')

    //     gigs = gigs.filter(gig => {
    //         return gig.tags.some(tag => regex.test(tag)) ||
    //             regex.test(gig.title) ||
    //             regex.test(gig.description)
    //     })
    // }
    // if (filterBy.minPrice && filterBy.maxPrice) {
    //     if (filterBy.minPrice > filterBy.maxPrice) {
    //         [filterBy.minPrice, filterBy.maxPrice] = [filterBy.maxPrice, filterBy.minPrice]
    //         gigs = gigs.filter(gig => gig.price <= filterBy.maxPrice)
    //     }
    //     else {
    //         gigs = gigs.filter(gig => gig.price >= filterBy.minPrice && gig.price <= filterBy.maxPrice)
    //     }
    // }

    // if (filterBy.minPrice) {
    //     gigs = gigs.filter(gig => gig.price >= filterBy.minPrice)
    // }
    // if (filterBy.maxPrice) {
    //     gigs = gigs.filter(gig => gig.price <= filterBy.maxPrice)
    // }
    // if (filterBy.category) {
    //     gigs = gigs.filter(gig => gig.category === filterBy.category)
    // }
    // if (filterBy.tags && filterBy.tags.length > 0) {
    //     gigs = gigs.filter(gig => {
    //         return gig.tags.some(tag => {
    //             return filterBy.tags.includes(tag)
    //         });
    //     });
    // }
    // if (filterBy.userId) {
    //     gigs = gigs.filter(gig => gig.owner._id === filterBy.userId)
    // }
    // if (filterBy.daysToMake) {
    //     gigs = gigs.filter(gig => gig.packages.basic.packDaysToMake <= filterBy.daysToMake)
    // }
    // if (filterBy.topRated) {
    //     gigs = gigs.filter(gig => gig.owner.rate >= 5)
    // }


    // if (filterBy.premiumLevel && filterBy.basicLevel) {
    //     gigs = gigs.filter(gig => gig.owner.level === 1 || gig.owner.level === 2)
    // } else if (filterBy.basicLevel) {
    //     gigs = gigs.filter(gig => gig.owner.level === 1)
    // } else if (filterBy.premiumLevel) {
    //     gigs = gigs.filter(gig => gig.owner.level === 2)
    // }

    // if (filterBy.sortBy) {
    //     switch (filterBy.sortBy) {
    //         case 'new': gigs = gigs.sort((gig1, gig2) => { return gig2.createdAt - gig1.createdAt })
    //             break
    //         case 'recommend': gigs = gigs.sort((gig1, gig2) => { return gig2.owner.rate - gig1.owner.rate })
    //     }
    // }

    // return gigs
}

async function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
    // return await storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    try {
        return httpService.delete(`gig/${gigId}`)
    } catch (err) {
        throw err
    }
    // throw new Error('Nope')
    // await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    let savedGig
    try {
        if (gig._id) {
            savedGig = await httpService.put(`gig/${gig._id}`, gig)
            // savedGig = await storageService.put(STORAGE_KEY, gig)
        } else {
            savedGig = await httpService.post('gig', gig)
            // savedGig = await storageService.post(STORAGE_KEY, gig)
        }
        return savedGig

    } catch (err) {
        throw err
    }
}

export function getCategories() {
    return categories
}

export function getDefaultFilter() {
    return { minPrice: '', maxPrice: '', txt: '', category: '', tags: [], page: 1, userId: '', daysToMake: '', topRated: false, basicLevel: false, premiumLevel: false, sortBy: 'recommend' }
}


function getEmptyGig() {
    let owner = userService.getLoggedinUser()
    return {
        owner,
        title: 'I will ',
        createdAt: Date.now(),
        packages: {
            basic: {
                title: 'Bronze',
                packPrice: 15,
                packDaysToMake: 3,
                desc: '1 logo design + High Quality Mock-up + Logo Transparency + NO COMPLEX DESIGN',
                features: ['1 concept included', 'Logo transparency']
            },
            standard: {
                title: 'Silver',
                packPrice: 30,
                packDaysToMake: 5,
                desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
                features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
            },
            premium: {
                title: 'Gold',
                packPrice: 45,
                packDaysToMake: 8,
                desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
                features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
            }
        },
        price: 5, //Don't remove this temporary to make the app work properly
        daysToMake: 1, //Don't remove this temporary to make the app work properly
        description: '',
        imgUrls: ['https://res.cloudinary.com/dgsfbxsed/image/upload/v1699295916/img-1_irmyfa.webp', 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699295916/img-2_sqsmdp.webp'],
        category: '',
        tags: [],
        likedByUsers: ['mini-user']
    }
}

// function _createGigs() {
//     let gigs = utilService.loadFromStorage(STORAGE_KEY)
//     if (!gigs || !gigs.length) {
//         gigs = demoGigs
//         utilService.saveToStorage(STORAGE_KEY, gigs)
//     }
// }


// TEST DATA
// storageService.post(STORAGE_KEY, {title: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




