export const users = [
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
]
