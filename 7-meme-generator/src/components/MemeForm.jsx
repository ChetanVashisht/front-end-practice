import { useState } from 'react';
import meme from '../assets/meme.png'
import data from '../assets/memesData'

export default function MemeForm() {
    var [memeImage, setMemeImage] = useState(meme)
    var renderNewImage = function () {
        const allMemes = data.data.memes;
        const randomElement = allMemes[Math.floor(Math.random() * allMemes.length)];
        setMemeImage(__ => randomElement.url)
    };
    return (
        <div className='form-section'>
            <div className='form-inputs'>
                <input type="text" name="top" placeholder='Top text' />
                <input type="text" name="bottom" placeholder='Bottom text' />
            </div>
            <button className='form-submit' onClick={renderNewImage}>Get a new meme image  🖼</button>
            <img src={memeImage} className="meme-image" />
        </div>
    )
}
