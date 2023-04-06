import React from 'react'
import "./AddTweet.css"
import user from "./user.jpg"
function AddTweet({ data, deleteTweet,imageUrl,Commentvalue,commentInput,setCommentInputMsg,commentPost}) {
  
  
    return (
        <div className='AddTweet'>
            <div className='AddTweet_container' >
                {
                    data && data.map((item) => {
                        return (<>
                            <div className='p'>
                                <img src={user} alt="user" className='AddTweet_container_image' key={item.id} />
                                <div className='AddTweet_container_message_field'>
                                    <span>Rohit bhatia</span>
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>@rohitbhatia</span>
                                    <span onClick={() => deleteTweet(item)} className="removeTweet">X</span>
                                    {/* <img src={item.img} alt="post" className='post_img'/> */}
                                    <p>{item.tweet}</p>
                                    <div className='userOption'>
                                        <i class="fa-regular fa-message" onClick={()=>Commentvalue(item)}></i>
                                        {
                                            item.toggle?<><input type="text" placeholder='comment....' 
                                           onChange={(e)=>setCommentInputMsg(e.target.value)}
                                        /> 
                                        <button onClick={()=>commentPost(item)}>add</button>
                                        </>: null
                                        }
                                           <p>{item.commentMsg}</p>
                                      
                                      
                                        <i class="fa-solid fa-heart"></i>
                                        <i class="fa-solid fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <hr className='n'></hr>
                        </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AddTweet
