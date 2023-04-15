import React, {useState} from 'react';
// import memesData from "../memesData";
import memesData from "../memesData1";

const MainForm = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/265j.jpg'
    }) ;

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage(e) {
        e.preventDefault();

        const {memes} = allMemeImages.data;
        const randomValue = Math.floor((Math.random()) * memes.length);
        const url = memes[randomValue].url;

        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    const [formData, setFormData] = useState(
        {
            topText: '',
            bottomText: ''
        }
    );

    function changeText(e) {
        const {name, value} = e.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    return (
        <main>
            <form className='form'>
                <input
                    onChange={changeText}
                    name="topText"
                    className="form--input"
                    placeholder="Top text"
                />
                <input
                    onChange={changeText}
                    name="bottomText"
                    className="form--input"
                    placeholder="Bottom text"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button">
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </main>
    );
};

export default MainForm;
