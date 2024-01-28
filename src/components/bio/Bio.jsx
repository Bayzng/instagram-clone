import { useState, useEffect } from 'react'
import React from 'react'
import getPhotoUrl from 'get-photo-url'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import instagram from '../../assets/instagram.png'
import './bio.css'
import { db } from '../../dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import Leftside from '../left/Leftside'
import Right from '../right/Right'
import Loader from '../loader/Loader'

const Bio = () => {

    const allPhotos = useLiveQuery(() => db.gallery.toArray(), [])

    const addPhoto = async () => {
        db.gallery.add({
            url: await getPhotoUrl('#addPhotoInput')
        })
    }

    const removePhoto = (id) => {
        db.gallery.delete(id)
    }

    const [ userDetails, setUserDetails ] = useState({
        name: 'AbdulAkeem Adebayo',
        about: 'Building My Amaizing Portfilio',
    })

    const [ editFormIsOpen, seteditFormIsOpen ] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(instagram)


    useEffect(() => {
        const setDataFromDb = async () => {
            const userDetailsFromDb = await db.bio.get('info')
            const profilePhotoFromDb = await db.bio.get('profilePhoto')
            userDetailsFromDb && setUserDetails(userDetailsFromDb)
            profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
        }

        setDataFromDb()
    }, [])

    const updateUserDetails = async (event) => {
        event.preventDefault()
        const objectData = {
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value,
        }

        setUserDetails(objectData)
        await db.bio.put(objectData, 'info')
        seteditFormIsOpen(false)
    }
   
    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }

    const editForm = (
        <form className='editForm' onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" id='' name='nameOfUser' defaultValue={userDetails?.name} placeholder='Your Name' />
            <input type="text" id='' name='aboutUser' defaultValue={userDetails?.about} placeholder='About You' />
            <br />
            <button type='button' className='cancel-button' onClick={() => seteditFormIsOpen(false)}>Cancel</button>
            <button type='submit' className='cancel-button'>Save</button>
        </form>
    )
    

    const editButton = <button onClick={() => seteditFormIsOpen(true)}>Edit</button>

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false)
        }, 2000)
    })


  return (
   <div className='usersPage'>
   <Leftside/>
    <div id='sectionTwo'>
        <section className='bio'>
                <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
                <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                    <div className="profile-photo" role='button' title='click to edit photo'>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                </label>


                <div className="profile-info">
                    <p className="name">{userDetails.name}</p>
                    <p className="about">{userDetails.about}</p>
                    
                    {editFormIsOpen ? editForm : editButton}
                </div>
        </section>
        <div>
            <input type="file" name='photo' id='addPhotoInput' />
            <label htmlFor="addPhotoInput" className='plus' onClick={addPhoto}>
                <AiOutlinePlusSquare/>
            </label>
        </div>

        <div className='--gallary-page'>
            {isLoading ? (
                <Loader/>
            ) : (
                <section className='gallary'>
                {allPhotos?.map((photo) => {
                    return (
                        <div className="item" key={photo.id}>
                            <img src={photo.url} className='item-image' alt="" />
                            <p style={{marginTop: '-20px', marginLeft: '10px', fontWeight: '900', fontSize: '13px'}}>{userDetails.name}</p>
                            <div className="delete-button" onClick={() => removePhoto(photo.id)}>Delete</div>
                        </div>
                    )
                })}
            </section>
            )}
        </div>
        
    </div>
    <Right/>
   </div>
  )
}

export default Bio