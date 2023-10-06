const demoUsers = [
  {
    _id: "u101",
    fullname: "Taylor P",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696177526/cld-sample.jpg",
    username: "taylor_paul10",
    password: "secret",
    level: "basic/premium",
    desc: "Are you looking for an expert logo designer to design your logo? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: true,
    reviews: [
      {
        "id": "madeId",
        "gig": "{optional-mini-gig}",
        "txt": "Very kind and works fast",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
  },
  {
    _id: "u102",
    fullname: "Jhon Iverson",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/v1696584327/qcw1ydkltzywb3g4s5ty.jpg",
    username: "jhon_iverson23",
    password: "123",
    level: "basic/premium",
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
    location: 'United States',
    lang: ['English', 'Hebrew'],
    reviews: [
      {
        "id": "madeId",
        "gig": "{optional-mini-gig}",
        "txt": "Very kind and works fast",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
  },
  {
    _id: "u207",
    fullname: "James Query",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/v1696177501/samples/people/boy-snow-hoodie.jpg",
    username: "james_q55",
    password: "123",
    level: "basic/premium",
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
    location: 'Italy',
    lang: ['Italian', 'Chinese', 'English', 'Spanish'],
    reviews: [
      {
        "id": "madeId",
        "gig": "{optional-mini-gig}",
        "txt": "Very kind and works fast",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
  },
]

export default demoUsers
