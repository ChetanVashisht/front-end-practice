import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from "./Image"

export default function ImageGrid() {
    const [images, setImages] = useState([])
    const loadImages = _ => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(resp => resp.json())
            .then(setImages)
    }
    useEffect(loadImages, [])
    const renderImage = (image, id) => (<Image image={image} key={id} />)
    return (
        <main className='photos'>
            {images.map(renderImage)}
        </main>
    )
}
