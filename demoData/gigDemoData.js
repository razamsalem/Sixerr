const gigDemoData = [
  {
    _id: "i101",
    title: "I will design your logo",
    price: 12.99,
    owner: {
      "_id": "u101",
      "fullname": "Micky Smith",
      "imgUrl": "url",
      "level": "basic/premium",
      "rate": 5
    },
    daysToMake: 3,
    description: "Make unique logo...",
    imgUrls: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142024147/original/27b1fb04de81d0ba018311fd4adc95d36f2fb6ce/design-professional-business-logo-with-copyrights.jpg"],
    tags: [
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    likedByUsers: ['mini-user']
  },
  {
    _id: "i102",
    title: "I will build saas business as a full stack web developer",
    price: 26.99,
    owner: {
      "_id": "u102",
      "fullname": "Julia Carter",
      "imgUrl": "url",
      "level": "basic/premium",
      "rate": 3.2
    },
    daysToMake: 27,
    description: "Looking for a custom-built web app for your SaaS business? As a full stack web developer, I specialize in creating tailored web applications using TypeScript, React, MongoDB, Nodejs, PHP, and JavaScript. My focus is understanding clients' unique needs and collaborating...",
    imgUrls: ["https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/302267572/original/1106716160969d473e8e233fdeee032270b4ab10/build-a-high-performance-web-app-using-mern-stack.png"],
    tags: [
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    likedByUsers: ['mini-user']
  }
]

export default gigDemoData

const allTags = [
  "webapp",
  "wordpress",
  "voice-over",
  "artisitic",
  "proffesional",
  "accessible",
]


function isPrimaryTag(tag) {
  return allTags.slice(0, 3).includes(tag)
}


// HomePage
//  list of gigs with link to gig-details

// Gig Details
// <pre>JSON, slowly improve

// UserDetails 
//  basic info
//  orderedGigs => orderService.query({userId: 'u101'})
//  ownedGigs => gigService.query({ownerId: 'u103'})

// GigEdit - make it super easy to add Gig for development

// GigList, GigOrder
// Order, confirm Order
// Lastly: GigExplore, Filtering


function loadApp() {
  socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
    showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
  })
}