const demoUsers = [
  {
    _id: "u101",
    fullname: "Taylor P (seller)",
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
    fullname: "Raz A",
    imgUrl: "https://res.cloudinary.com/de2rdmsca/image/upload/v1696513138/T057RE2PDLK-U05A3692M1S-bb4a6cfaaabe-512_lwcf11.jpg",
    username: "raz_Amsalem23",
    password: "123",
    level: "basic/premium",
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
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
]

export default demoUsers
