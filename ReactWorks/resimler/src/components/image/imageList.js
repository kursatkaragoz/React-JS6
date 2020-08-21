import React from 'react';
import './imageList.css';
import Image from './image';

const ImageList = ({images}) =>{

    const preparedImageList = images.map(image =>{
        return(
            <Image key = {image.id} image={image}/>
        )
    })
    return (

        <div className = 'image-list-container'>
            
            {preparedImageList} 
        </div>
    )
}
export default ImageList;