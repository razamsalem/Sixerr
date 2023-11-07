import { useState } from 'react'
import { uploadService } from '../services/upload.service'
import LoadingCircle from './LoadingCircle'
import threeDots from '../assets/img/3dots.svg'

export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 500,
    width: 500,
  })
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgData({ imgUrl: secure_url, width, height })
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
  }

  function getUploadLabel() {
    if (imgData.imgUrl && isUploading) return <img className='loading' src={threeDots} />
    if (imgData.imgUrl) return 'Upload More?'
    return isUploading ? <img className='loading' src={threeDots} /> : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      <label className='user-info-label'>
        <i className="fa-solid fa-cloud-arrow-up cloud-icon"></i>
        {getUploadLabel()}
        <input className='user-info-input' type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
      </label>
      {imgData.imgUrl && <img className='img-preview' src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
    </div>
  )
}