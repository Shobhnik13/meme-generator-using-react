import React from 'react'
function meme(){  

  const [meme,setMeme]=React.useState({
    topText:"", 
    bottomText:"",
    randomImage:""
  })

  const [allMemeImages,setAllMemeImages]=React.useState([])
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(ans=>setAllMemeImages(ans.data.memes))
  },[])
  console.log(allMemeImages)
  function getMemeImage(){
    const randomPick=Math.floor(Math.random()*allMemeImages.length);
    const url=allMemeImages[randomPick].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage:url
    }));
  }
  function handleChange(event){
    const {name,value}=event.target
    setMeme(prevMeme =>({
      ...prevMeme,
        [name]: value

    }))
  }

  return (
    <main>
    <div className='form'>
         <input type="text"
          className='text-input'
           placeholder='Top text'
           name='topText'//use the name as the same as mentioned in use state 
           value={meme.topText}//call by using  state and the name used in state
           onChange={handleChange}
           />
        <input type="text"
         className='text-input'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          />
        <button className='meme-button' onClick={getMemeImage}>Get meme image</button>
    </div>
    <div className="meme-corner">
      <img src={meme.randomImage} className='meme-image' ></img>
      <h2 className="meme-toptext">{meme.topText}</h2>
      <h2 className="meme-bottomtext">{meme.bottomText}</h2>
    </div>
    </main>
  )
}

export default meme