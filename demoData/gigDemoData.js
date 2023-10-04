const gigDemoData = [
  {
    _id: "i101",
    title: "I will create custom company logo design for your business",
    price: 12.99,
    owner: {
      "_id": "u101",
      "fullname": "Micky Smith",
      "imgUrl": "url",
      "level": "basic/premium",
      "rate": 5,
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3e69825348268689975368374cd57bbb-1611383243667/c28fdd4b-d5c7-4035-8379-862ac10d67fd.png"
    },
    daysToMake: 3,
    description: "You are the best as you are checking the best gig here on Fiverr and you have a very good eye for design. I will design you a logo for businesses to events, I can pull together an excellent, professional-looking artwork to be used on any type of print media or digitally. There are a lot of logos out there - but the great ones always catch your eye and leave a lasting impression. Let's design one together!",
    imgUrls: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/229020114/original/e9d6bca4248af0e976ed0ec1068114090ac8e393/do-professional-modern-minimalist-logo-design.jpg"],
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
    title: "I will design your companys vision",
    price: 26.99,
    owner: {
      "_id": "u102",
      "fullname": "Julia Carter",
      "imgUrl": "url",
      "level": "basic/premium",
      "rate": 3.2,
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6eac0adad8586c2d46b7fcf4a5f0d227-1671025218902/9fe6d9ab-6d6a-4199-9934-b9d1675d709d.jpg"
    },
    daysToMake: 27,
    description: "Thank you for stopping by! This gig is intended for anyone who is looking for a well rounded and undefined design for their company or brand. We will try different concepts and ideas to get you where you need to be. If you aren't sure where to start, this is a good gig to choose Unlike a lot of other fiverr artists, my designs do not change in quality depending upon what package you choose. All of my designs deserve the same attention and quality guarantee. My process starts in the traditional form which means I begin with paper and pencil. Once that is complete I refine it with art and/or calligraphy pens. Once that's complete, I bring it into my computer and render it digitally. The colors can be whatever you choose and the packages are all different. So please read them carefully or send me a message if you have any questions",
    imgUrls: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118127829/original/78fe34ecddb886dd10b291634bbf2e03d55ba64e/create-marketable-and-custom-designs.png"],
    tags: [
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    likedByUsers: ['mini-user']
  },
  {
    _id: "i104",
    title: "I will do 3 modern minimalist logo design",
    price: 12.99,
    owner: {
      "_id": "u104",
      "fullname": "Justin Timber",
      "imgUrl": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110847760/original/00bbe27e2dc6b3b34bd1a6c02b9b5867e1aff783/do-minimalist-logo-design.jpg",
      "level": "basic/premium",
      "rate": 4,
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/505cad63a9a60b5e7f007f0f70b70320-1652367443632/d7945300-9d2e-4919-948b-3bc02f5cc55a.jpg"
    },
    daysToMake: 20,
    description: "Welcome to my minimal logo design gig! Being the face of a brand, the logo design should be a prime need for any brand. I will make a unique logo for your business that will help you stand out from the competition. I've been working as an Expert Logo Designer & Branding Specialist and am trusted by over 13K+ various clients worldwide.",
    imgUrls: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/314856443/original/48e49502ac05c89ac031d46924d1f9b0a41b15fa/do-timeless-modern-minimalist-unique-business-logo-design-4e58.png"],
    tags: [
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    likedByUsers: ['mini-user']
  },
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