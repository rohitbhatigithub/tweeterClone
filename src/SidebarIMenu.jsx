import React from 'react'
import "./SidebarIMenu.css"
function SidebarIMenu({Item , Icon}) {
  return (
  
    <div className='SidebarIMenu'>
     <span className='icon_item'>{Icon}</span>
     <h3>{Item}</h3>
    </div>
  
  )
}

export default SidebarIMenu
