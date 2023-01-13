import React, {useState} from 'react';
// import memesData from "../memesData";
import memesData from "../memesData1";

const MainForm = () => {

    const {memes} = memesData.data;

    const [memeImage, setMemeImage] = useState('') ;

    function getMemeImage(e) {
        e.preventDefault();
        let randomValue = Math.floor((Math.random()) * memes.length);
        setMemeImage(memeImage => memes[randomValue].url)
        console.log(memeImage)
    }




    return (
        <main>
            <form className='form'>
                <input className="form--input" placeholder="Top text"/>
                <input className="form--input" placeholder="Bottom text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </form>
            <div className="meme-img">
                <img src={memeImage} alt=""/>
            </div>
        </main>
    );
};

export default MainForm;
