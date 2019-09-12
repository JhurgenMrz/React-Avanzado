import React from 'react'
import {PhotoCart} from '../PhotoCard'

export const ListOfPhotoCards = ()=>{
    return (
        <ul>
            {
                [1,2,3,4].map((card)=>(
                    <PhotoCart key={card}/>
                ))
            }
        </ul>
    )
}