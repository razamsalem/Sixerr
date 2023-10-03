export const users = [
    {
      _id: "u101",
      fullname: "User 1",
      imgUrl: "/img/img1.jpg",
      username: "user1",
      password: "secret",
      level: "basic/premium",
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
  