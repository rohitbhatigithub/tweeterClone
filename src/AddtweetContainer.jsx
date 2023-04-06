import React from 'react'
import user from "./user.jpg"
function AddtweetContainer({setTweetMsg,tweetMsg,tweet,setImageUrl}) {
  
  
  return (
    <div className='AddtweetContainer'>
           <div className='AddTweetSection'>
        <h3 className='logoname'>Home</h3>
        <hr className='logohr'></hr>

        <div className='AddTweetSection_input_field'>
          <img src={user} alt="user" className='AddTweetSection_user_image' />
          <input type="text"
            placeholder='Whats happening?'
            className='AddTweetSection_add_tweet'
            onChange={(e)=>setTweetMsg(e.target.value)}
            value={tweetMsg}
          />
        </div>
        <div className='AddTweetSection_image_URL'>
          <input type="text"
            placeholder='Optional: Enter image URL'
            className='AddTweetSection_image_URL_input'
            onChange={(e)=>setImageUrl(e.target.value)}
          />
        </div>
        <button className='AddTweetSection_tweet_btn' onClick={()=>tweet()}>Tweet</button>
        <hr className='hr' />
      </div>
    </div>
  )
}

export default AddtweetContainer
