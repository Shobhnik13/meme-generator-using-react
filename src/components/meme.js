import React from 'react'
import memeData from '../memedata'
function meme(){  

  const [meme,setMeme]=React.useState({
    topText:"", 
    bottomText:"",
    randomImage:""
  })
  const [allMemeImages,setAllMemeImages]=React.useState(memeData)
  function getMemeImage(){
    const memeArray=memeData.data.memes;
    const randomPick=Math.floor(Math.random()*memeArray.length);
    const url=memeArray[randomPick].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage:url
    }));
  }
  return (
    <main>
    <div className='form'>
         <input type="text" className='text-input' placeholder='Top text'/>
        <input type="text" className='text-input' placeholder='Bottom text'/>
        <button className='meme-button' onClick={getMemeImage}>Get meme image</button>
    </div>
      <img src={meme.randomImage} className='meme-image' ></img>
    </main>
  )
}

export default meme