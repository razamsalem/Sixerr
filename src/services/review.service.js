import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { userService } from './user.service.http'
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
    "rate": 1,
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

  const aboutUserId = review.gig.owner._id
  const aboutUser = await userService.getById(aboutUserId)
  aboutUser.reviews.unshift(review)
  userService.update(aboutUser)
}