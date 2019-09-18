import React from 'react'
import {PhotoCart} from '../PhotoCard'


export const ListOfPhotoCardsComponent = ({data: { photos = [] }} = {})=>{
    return (
        <ul>
            {
                photos.map((photo)=>(
                        <PhotoCart key={photo.id} {...photo}/>
                ))
            }
        </ul>
    )
}
