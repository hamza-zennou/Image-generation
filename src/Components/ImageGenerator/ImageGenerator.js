import React, { useState, useRef } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
    const[image_url, setImage_url] =  useState('/');
    let inputRef = useRef(null);

    const ImageGenerator = async () =>{
        if(inputRef.current.value==="") {
            return 0;
        }
        const response =await fetch(
            "https://api.openai.com/v1/images/generations ",
            {
                method: "POST",
                headers:{
                   "Content-Type":"application/json",
                   Authorization: "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",
                   "User-Agent":"Chrome", 
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value} `,
                    n:1,
                    size:'512'
                }),
            }
        );
    }
    
  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai image <span>generator</span></div>
        <div className='img-loading'>
            <div className='image'><img src={image_url==='/'?default_image:image_url} alt=''></img></div>
        </div>

        <div className='search-box'>
            <input type='text' className='search-input' placeholder='Describe'/>
            <div className='generate-btn' onClick={()=>{ImageGenerator()}}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator