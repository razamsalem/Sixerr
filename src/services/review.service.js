import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { userService } from './user.service'
import { utilService } from './util.service'


export const reviewService = {
  add,
  query,
  remove,
  getEmptyReview
}

function getEmptyReview() {
  return {

    "id": utilService.makeId(),
    "gig": null,
    "txt": '',
    "rate": 0,
    "createdAt": Date.now(),
    "reviewImgUrl": null,
    "by": null
  }
}

function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`review${queryStr}`)
  // return storageService.query('review')
}

async function remove(reviewId) {
  await httpService.delete(`review/${reviewId}`)
  // await storageService.remove('review', reviewId)
}

async function add(review) {
  console.log(review)
  // const addedReview = await httpService.post(`review`, { txt, aboutUserId })

  // const aboutUser = await userService.getById(aboutUserId)

  // const reviewToAdd = {
  //   txt,
  //   byUser: userService.getLoggedinUser(),
  //   aboutUser: {
  //     _id: aboutUser._id,
  //     fullname: aboutUser.fullname,
  //     imgUrl: aboutUser.imgUrl
  //   }
  // }

  // reviewToAdd.byUser.score += 10
  // await userService.update(reviewToAdd.byUser)
  // const addedReview = await storageService.post('review', reviewToAdd)
  // return addedReview
}