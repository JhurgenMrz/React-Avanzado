import React from 'react'
import {ImgWrapper,Img, Button} from './styles'
import {MdFavoriteBorder} from 'react-icons/md'

export const PhotoCart = ({id, likes = 0, src}) =>{

    const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={DEFAULT_IMAGE} alt=""/>
                </ImgWrapper>
            </a>

            <Button>
                <MdFavoriteBorder size={`32px`}/>
                {likes} likes!
            </Button>
        </article>
    )
}