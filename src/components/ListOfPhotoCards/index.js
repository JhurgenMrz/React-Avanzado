import React from 'react'
import {PhotoCart} from '../PhotoCard'

export const ListOfPhotoCards = ()=>{
    return (
        <ul>
            {
                [1,2,3,4,5,6,7].map((id)=>(
                        <PhotoCart key={id} id={id}/>
                ))
            }
        </ul>
    )
}