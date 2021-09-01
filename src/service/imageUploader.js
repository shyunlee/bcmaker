// import {v2 as cloudinary} from 'cloudinary'

class ImageUploader {

  async upload(file) {
    const url = `https://api.cloudinary.com/v1_1/shyuncloud/image/upload`
    const data = new FormData()

    data.append('file', file)
    data.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY)
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET)
    
    const result = await fetch(url, {
      method: "POST",
      body: data,
    })

    return await result.json()
  }  

}

export default ImageUploader;
