export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    getAssetSrc,
    calculateVAT,
    getSubtitle,
    getEducation,
    getEducationPlace,
    capitalizeFirstLetter,
    timeAgo,
    generateRandomDate,
    getRandomDate,
    calculateDaysFromTimestamp,
    getFlag,
    getCategorySubHeader,
    getRandomFloat
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function capitalizeFirstLetter(str) {
    if (!str || str.length === 0) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomFloat(min, max) {
    const randomFloat = Math.random() * (max - min) + min;
    return Math.round(randomFloat * 10) / 10
}

function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function calculateVAT(price) {
    const vatAmount = 0.17 * price
    const formattedVAT = parseFloat(vatAmount.toFixed(2))
    return formattedVAT
}

function getSubtitle() {
    const languageLevel = ['Basic', 'Conversational', 'Fluent', 'Native/Bilingual']
    const randIdx = getRandomIntInclusive(0, languageLevel.length - 1)
    const randIdx2 = getRandomIntInclusive(0, languageLevel.length - 1)
    const randIdx3 = getRandomIntInclusive(0, languageLevel.length - 1)

    const randSubtitles = [languageLevel[randIdx], languageLevel[randIdx2], languageLevel[randIdx3]]

    return randSubtitles
}

function getEducation() {
    const educationLevel = ['B.A. - Communication Design', 'B.A. - Business Managment', 'M.B.A. - Financial Management', 'B.Sc. - Digital Marketing', 'B.Sc. - Computer Science']
    const randIdx = getRandomIntInclusive(0, educationLevel.length - 1)
    const randEducation = educationLevel[randIdx]

    return randEducation
}

function getEducationPlace() {
    const educationPlace = ['knust, Ghana, Graduated 2022', 'Mariboru, Slovenia, Graduated 2016', 'Saint David, United Kingdom, Graduated 2010', 'Universität Berlin, Germany, Graduated 2017', 'Massachusetts , United States, Graduated 2019']
    const randIdx = getRandomIntInclusive(0, educationPlace.length - 1)
    const randEducation = educationPlace[randIdx]

    return randEducation
}

// util function
function getAssetSrc(name) {
    const path = `/src/assets/${name}`
    const modules = import.meta.glob('/src/assets/*', { eager: true })
    const mod = modules[path]
    return mod.default
}

function timeAgo(timestamp) {
    let seconds = Math.floor((new Date() - timestamp) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return "few seconds ago";
}


function generateRandomDate(from, to) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}

function getRandomDate() {
    const dates = ['Mar 06 2023', 'Apr 02 2023', 'Jul 17 2023', 'Mar 25 2023', 'Oct 26 2023', 'May 23 2023', 'Feb 11 2023', 'Dec 12 2022']
    const slice = getRandomIntInclusive(0, dates.length - 1)
    return dates[slice]
}

function formatDate(date) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}

function calculateDaysFromTimestamp(timestamp, expectedDays) {
    const days = expectedDays * 86400000;
    timestamp += days;

    const resultDate = new Date(timestamp);
    return formatDate(resultDate);
}

function getFlag(country = 'un') {
    const flags = {
        un: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698929556/icons8-un-flag-48_mloykm.png',
        israel: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/israel_rtvzid.png',
        'united states': 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/us_dzydlk.png',
        italy: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928454/italy_aqlv4l.png',
        thailand: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928454/thailand_izys0k.png',
        switzerland: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928454/switzerland_zxnusp.png',
        norway: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/norway_a1j3hd.png',
        latvia: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/latvia_sjfngq.png',
        germany: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/germany_hlgbdi.png',
        india: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/india_zgam0i.png',
        hungary: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/hungary_pdvcek.png',
        france: 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698928453/france_wa24fs.png',
        venezuela: 'https://res.cloudinary.com/de2rdmsca/image/upload/v1699385249/Flag_of_Venezuela__state_nngcam.svg',
        slovenia: 'https://res.cloudinary.com/de2rdmsca/image/upload/v1699451197/Flag_of_Slovenia_q3nvfd.svg',
        belgium: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e7-1f1ea.png',
        colombia: 'https://res.cloudinary.com/de2rdmsca/image/upload/v1699456284/2000px-Flag_of_Colombia_svg-500x500_kkjh6j.png',
    }

    if (country.toLocaleLowerCase() in flags) return flags[country.toLocaleLowerCase()]
    else return flags['un']
}

function getCategorySubHeader(category) {
    switch (category) {
        case 'Graphics & Design':
            return 'Your brand\'s visual identity elevated to perfection.'
        case 'Programming & Tech':
            return 'Turn ideas into reality with software, mobile apps, and website development.'
        case 'Digital Marketing':
            return 'Boost your online presence and turn clicks into conversions.'
        case 'Video & Animation':
            return 'Captivate your audience with engaging visuals'
        case 'Writing & Translation':
            return 'Harness the power of words with our writing experts'
        case 'Music & Audio':
            return 'Experience the magic of sound with our audio masters'
        case 'Business':
            return 'Success starts with strategic solutions.'
        case 'Data':
            return 'Success starts with strategic solutions.'
        case 'Photography':
            return 'Celebrate moments captured in timeless images.'
        case 'AI Services':
            return 'Shape the future with AI-driven solutions.'
    }
}