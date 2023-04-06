import React from 'react'
import user from "./user.jpg"
import gif from "./babyDancing.gif"
import "./TrendingScetion.css"
function TrendingScetion() {
  
  return (
    <div className='TrendingScetion'>
     
      <input type="text"
        placeholder='Search Twitter'
        className='TrendingScetion_input_search'
      />

      <div className='TrendingScetion_container'>
      <h3 className='TrendingScetion_name'>What's happening</h3>
      <div className='TrendingScetion_main_box'>

      <div className='TrendingScetion_container_image'>

       <img src={user} alt="user_profile" className='TrendingScetion_user_image'/>

         <div className='user_details'>

         <div className='user_first_details'> 
         <p>Rohit Bhatia</p>
          <i class="fa fa-check-square" aria-hidden="true"></i>
          </div>

         <div className='user_second_details'> 
         <p>@rohitbhatia</p>
          <p>Follow</p>
          </div>
      
         </div>
       <i class="fa-brands fa-twitter"></i>
       </div>
       <p className='TrendingScetion_message'>It is a long page when looking at its layout.</p>
       <img src={gif} alt="Loding..." className='TrendingScetion_gif'/>
       <p style={{marginLeft:"18px"}}>12:52 PM Jun 7,2022</p>
       <div className='people_reply_post'>

       <div >
       <i class="fa-regular fa-heart"></i>
       <span>121.8k</span>
       </div>
       <div>
       <i class="fa-regular fa-comment"></i>
       <span>Reply</span>
       </div>
       <div>
       <i class="fa-solid fa-arrow-up-from-bracket"></i>
       <span>Share</span>
       </div>
       
       </div>
       <button className='people_reply_post_comment'>Read 1.3k replies</button>
       </div>


       <div className='TrendingScetion_main_box'>

      <div className='TrendingScetion_container_image'>

       <img src={user} alt="user_profile" className='TrendingScetion_user_image'/>

         <div className='user_details'>

         <div className='user_first_details'> 
         <p>Rohit Bhatia</p>
          <i class="fa fa-check-square" aria-hidden="true"></i>
          </div>

         <div className='user_second_details'> 
         <p>@rohitbhatia</p>
          <p>Follow</p>
          </div>
      
         </div>
       <i class="fa-brands fa-twitter"></i>
       </div>
       <p className='TrendingScetion_message'>It is a long page when looking at its layout.</p>
       <img src={gif} alt="Loding..." className='TrendingScetion_gif'/>
       <p style={{marginLeft:"18px"}}>12:52 PM Jun 7,2022</p>
       <div className='people_reply_post'>

       <div >
       <i class="fa-regular fa-heart"></i>
       <span>121.8k</span>
       </div>
       <div>
       <i class="fa-regular fa-comment"></i>
       <span>Reply</span>
       </div>
       <div>
       <i class="fa-solid fa-arrow-up-from-bracket"></i>
       <span>Share</span>
       </div>
       
       </div>
       <button className='people_reply_post_comment'>Read 1.3k replies</button>
       </div>



       <div className='TrendingScetion_main_box'>

      <div className='TrendingScetion_container_image'>

       <img src={user} alt="user_profile" className='TrendingScetion_user_image'/>

         <div className='user_details'>

         <div className='user_first_details'> 
         <p>Rohit Bhatia</p>
          <i class="fa fa-check-square" aria-hidden="true"></i>
          </div>

         <div className='user_second_details'> 
         <p>@rohitbhatia</p>
          <p>Follow</p>
          </div>
      
         </div>
       <i class="fa-brands fa-twitter"></i>
       </div>
       <p className='TrendingScetion_message'>It is a long page when looking at its layout.</p>
       <img src={gif} alt="Loding..." className='TrendingScetion_gif'/>
       <p style={{marginLeft:"18px"}}>12:52 PM Jun 7,2022</p>
       <div className='people_reply_post'>

       <div >
       <i class="fa-regular fa-heart"></i>
       <span>121.8k</span>
       </div>
       <div>
       <i class="fa-regular fa-comment"></i>
       <span>Reply</span>
       </div>
       <div>
       <i class="fa-solid fa-arrow-up-from-bracket"></i>
       <span>Share</span>
       </div>
       
       </div>
       <button className='people_reply_post_comment'>Read 1.3k replies</button>
       </div>


       <div className='TrendingScetion_main_box'>

      <div className='TrendingScetion_container_image'>

       <img src={user} alt="user_profile" className='TrendingScetion_user_image'/>

         <div className='user_details'>

         <div className='user_first_details'> 
         <p>Rohit Bhatia</p>
          <i class="fa fa-check-square" aria-hidden="true"></i>
          </div>

         <div className='user_second_details'> 
         <p>@rohitbhatia</p>
          <p>Follow</p>
          </div>
      
         </div>
       <i class="fa-brands fa-twitter"></i>
       </div>
       <p className='TrendingScetion_message'>It is a long page when looking at its layout.</p>
       <img src={gif} alt="Loding..." className='TrendingScetion_gif'/>
       <p style={{marginLeft:"18px"}}>12:52 PM Jun 7,2022</p>
       <div className='people_reply_post'>

       <div >
       <i class="fa-regular fa-heart"></i>
       <span>121.8k</span>
       </div>
       <div>
       <i class="fa-regular fa-comment"></i>
       <span>Reply</span>
       </div>
       <div>
       <i class="fa-solid fa-arrow-up-from-bracket"></i>
       <span>Share</span>
       </div>
       
       </div>
       <button className='people_reply_post_comment'>Read 1.3k replies</button>
       </div>
       </div>
     
      </div>
    
  )
}

export default TrendingScetion
