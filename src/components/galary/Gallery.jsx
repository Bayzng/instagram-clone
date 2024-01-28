import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../dexie'
import './gallery.css'
import ProfileData from '../profileData/ProfileData'

const Gallery = () => {
  
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), [])

  // const removePhoto = (id) => {
  //     db.gallery.delete(id)
  // }

return (
  <div className='--gallary-page'>
    <ProfileData/>
      <section className='gallary'>
          {allPhotos?.map((photo) => {
              return (
                <div className="item" key={photo.id}>
                    <img src={photo.url} className='item-image' alt="" />
                    {/* <div className="delete-button" onClick={() => removePhoto(photo.id)}>Delete</div> */}
                </div>
              )
          })}
      </section>
  </div>
)
}

export default Gallery