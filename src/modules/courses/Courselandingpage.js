import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import Footerpage from '../shares/Footerpage'

function Courselandingpage() {
  return (
    <Fragment>
    
   <div className='mainpage' style={{marginTop:"0px",minHeight:"80vh"}}>
      <Outlet></Outlet>
   </div>
    <Footerpage/>
   </Fragment>
  )
}

export default Courselandingpage