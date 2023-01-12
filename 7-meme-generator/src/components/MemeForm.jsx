import { useState, useEffect } from 'react';
import defaultMemeImage from '../assets/meme.png'

export default function MemeForm() {
    const [data, setData] = useState({})
    const [meme, setMeme] = useState({ topText: "Shut Up And", bottomText: "Take My Money", memeImage: defaultMemeImage })

    const loadMemeData = function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(json => setData(json.data.memes))
    }

    useEffect(loadMemeData, [])

    const getNewImage = function () {
        const randomElement = data[Math.floor(Math.random() * data.length)]
        return randomElement.url
    }
    const renderNewImage = function () {
        setMeme(__ => ({ topText: "", bottomText: "", memeImage: getNewImage() }))
    }

    const handleChange = function (e) {
        const { name, value } = e.target;
        setMeme(oldMemeInfo => ({ ...oldMemeInfo, [name]: value }))
    }

    return (
        <div className='form-section'>
            <div className='form-inputs'>
                <input type="text" name="topText" placeholder='Top text' onChange={handleChange} value={meme.topText} />
                <input type="text" name="bottomText" placeholder='Bottom text' onChange={handleChange} value={meme.bottomText} />
            </div>
            <button className='form-submit' onClick={renderNewImage}>Get a new meme image 🖼</button>
            <div className='meme'>
                <img src={meme.memeImage} name="meme-image" className="meme-image" />
                <h2 className='meme-text top' name="memeTopText">{meme.topText}</h2>
                <h2 className='meme-text bottom' name="memeBottomText">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
