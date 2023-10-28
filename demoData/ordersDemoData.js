const demoOrders = [
  {
    _id: "o1225",
    buyer: {
      "_id": "u207",
      "fullname": "James Query",
      "username": "james_q55",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
    },
    seller: {
      "_id": "u101",
      "fullname": "Taylor P",
      "username": "taylor_paul10",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
    },
    gig: {
      "_id": "i101",
      "title": "I will create custom company logo design for your business",
      "imgUrl": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/292332178/original/18841f3470f65b26636437baa1fd560438fb1a51/do-modern-and-elegant-logo-design-for-your-business.jpeg",
      "price": 14.99,
      packages: {
        basic: {
          title: 'Bronze Package',
          packPrice: 15,
          packDaysToMake: 3,
          desc: '1 logo design, High Quality Mock-up, Logo Transparency',
          features: ['1 concept included', 'Logo transparency']
        },
        standard: {
          title: 'Silver Package',
          packPrice: 30,
          packDaysToMake: 5,
          desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
          features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
        },
        premium: {
          title: 'Gold Package',
          packPrice: 45,
          packDaysToMake: 8,
          desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
          features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
        }
      },
    },
    // status: "pending/approved/rejected"
    status: "pending"
  },
  {
    _id: "o1226",
    buyer: {
      "_id": "u208",
      "fullname": "Liri Cohen",
      "username": "liri_cohen10",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696589336/MV5BZDJhYzdkMTUtMTg2MS00ZTM5LWI1OGUtYTY5MzY4NDM3NThjXkEyXkFqcGdeQXVyMjQwMDg0Ng_._V1__okvske.jpg",
    },
    seller: {
      "_id": "u101",
      "fullname": "Taylor P",
      "username": "taylor_paul10",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
    },
    gig: {
      "_id": "i101",
      "title": "I will create custom company logo design for your business",
      "imgUrl": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/292332178/original/18841f3470f65b26636437baa1fd560438fb1a51/do-modern-and-elegant-logo-design-for-your-business.jpeg",
      "price": 14.99,
      packages: {
        basic: {
          title: 'Bronze Package',
          packPrice: 15,
          packDaysToMake: 3,
          desc: '1 logo design, High Quality Mock-up, Logo Transparency',
          features: ['1 concept included', 'Logo transparency']
        },
        standard: {
          title: 'Silver Package',
          packPrice: 30,
          packDaysToMake: 5,
          desc: '2 HQ logo concepts + 3D Mock up + Logo Transparency + Printable Resolution file',
          features: ['2 concept included', 'Logo transparency', 'Printable file', 'Include 3D mockup']
        },
        premium: {
          title: 'Gold Package',
          packPrice: 45,
          packDaysToMake: 8,
          desc: ' 3 Amazing concepts + all source files+ Social Media Kit + 24/7 priority customer services',
          features: ['3 concepts included', 'Logo transparency', 'Vector file', 'Printable file', 'Include 3D mockup', 'Include source file', 'Include social media kit']
        }
      },
    },
    status: "approved"
  },
  {
    _id: "o1227",
    buyer: {
      "_id": "u102",
      "fullname": "Jhon Iverson",
      "username": "jhon_iverson23",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
    },
    seller: {
      "_id": "u101",
      "fullname": "Taylor P",
      "username": "taylor_paul10",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
    },
    gig: {
      "_id": "i104",
      "title": "I will do 3 modern minimalist logo design",
      "imgUrl": "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
      "price": 12.99
    },
    status: "rejected"
  },

]

export default demoOrders