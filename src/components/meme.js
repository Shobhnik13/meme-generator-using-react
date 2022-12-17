import React from 'react'
import memeData from '../memedata'
function meme(){  

  const[memeImg,setMemeImage]=React.useState("");
  function getMemeImage(){
    const memeArray=memeData.data.memes;
    const randomPick=Math.floor(Math.random()+memeArray.length);
    setMemeImage(memeArray[randomPick].url);
  }
  return (
    <main>
    <div className='form'>
         <input type="text" className='text-input' placeholder='Top text'/>
        <input type="text" className='text-input' placeholder='Bottom text'/>
        <button className='meme-button' onClick={getMemeImage}>Get meme image</button>
    </div>
      <img src={memeImg} className='meme-image' ></img>
    </main>
  )
}

export default meme