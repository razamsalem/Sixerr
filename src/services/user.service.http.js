import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const BASE_URL = 'auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    // remove,
    update,
    getEmptyUser
}

window.userService = userService


async function getUsers() {
    try {
        return await httpService.get(`user`)
    } catch (err) {
        console.log('Had issues in getting users', err);
        throw err
    }
    // return storageService.query('user')
}



async function getById(userId) {
    try {
        const user = await httpService.get(`user/${userId}`)
        // const user = await storageService.get('user', userId)
        return user
    } catch (err) {
        console.log('Had issues in getting user', err)
        throw err
    }

}

// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

async function update(user) {
    const savedUser = await httpService.put('user', user)
    return savedUser
}

async function login(userCred) {
    console.log(userCred.password, "userCred");
    try {
        const user = await httpService.post(BASE_URL + 'login', userCred)
        if (user) return saveLocalUser(user)
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function signup({ username, fullname, imgUrl, password }) {
    if (!imgUrl) imgUrl = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1699048789/user-1_conuzo.png'
    try {
        const userSignUp = await httpService.post(BASE_URL + 'signup', { username, fullname, imgUrl, password })
        if (userSignUp) return saveLocalUser(userSignUp)
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function logout() {
    try {
        await httpService.post(BASE_URL + 'logout')
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    } catch (err) {
        console.log(err)
        throw err
    }
}


function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, location: user.location, isSeller: user.isSeller, rate: user.rate, level: user.level }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getEmptyUser() {
    return {
        fullname: '',
        username: '',
        password: '',
        desc: '',
        isSeller: '',
        location: 'Israel',
        reviews: [],
        lang: ["English", "Hebrew"],
        level: 1
    }
}

// function _createusers() {
//     let users = utilService.loadFromStorage('user')
//     if (!users || !users.length) {
//         users = demoUsers
//         utilService.saveToStorage('user', users)
//     }
// }




