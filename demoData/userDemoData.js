const demoUsers = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    username: "user1",
    password: "secret",
    level: "basic/premium",
    desc: "Are you looking for an expert web developer to design and develop your website? If your answer is yes, then I welcome you and you are at the right place.",
    isSeller: false,
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
