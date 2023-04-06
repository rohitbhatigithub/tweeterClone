import React from 'react'
import Sidebar from './Sidebar'
import AddTweetSection from "./AddTweetSection";
import TrendingScetion from "./TrendingScetion"
import "./Home.css"

function Home({check}) {
  return (
    <div className='home'>
      <Sidebar/>
      <AddTweetSection check={check}/>
      <TrendingScetion/>

    </div>
  )
}

export default Home
