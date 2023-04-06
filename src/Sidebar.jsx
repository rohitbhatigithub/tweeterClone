import React from 'react'
import SidebarIMenu from "./SidebarIMenu";
import "./SidebarIMenu.css"
function Sidebar() {
  return (
    <div className='Sidebar'>
        
    <div className='twitterIcon'> <SidebarIMenu Icon={<i class="fa-brands fa-twitter"></i>}/></div>

   <div className='menu'>
   <div className='firstMenu'>
   <i class="fa-solid fa-house"></i>
   <h3>Home</h3>
   </div>
   
    {/* <SidebarIMenu Item="Home" Icon={<i class="fa-solid fa-house"></i>} id="homeIcon"/> */}
    <SidebarIMenu Item="Explore" Icon={<i class="fa-solid fa-magnifying-glass"></i>}/>
    <SidebarIMenu Item="Notification" Icon={<i class="fa-regular fa-bell"></i>}/>
    <SidebarIMenu Item="Message" Icon={<i class="fa-regular fa-envelope"></i>}/>
    <SidebarIMenu Item="Bookmarkas" Icon={<i class="fa-regular fa-bookmark"></i>}/>
    <SidebarIMenu Item="List" Icon={<i class="fa fa-list" aria-hidden="true"></i>}/>
    <SidebarIMenu Item="Profile" Icon={<i class="fa-regular fa-user"></i>}/>
    <SidebarIMenu Item="More" Icon={<i class="fa-solid fa-ellipsis"></i>}/>
    </div>

    <div className='tweetBtn'><button className='menu_tweet_btn'>Tweet</button></div>
    
    </div>
  )
}

export default Sidebar
