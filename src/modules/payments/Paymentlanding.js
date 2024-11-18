import React, { Fragment } from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom'

function Paymentlanding() {
  return (
   <Fragment>
    <Headerpage/>
   <div className='mainpage'>
      <Outlet></Outlet>
       
   </div>

    <Footerpage/>
   </Fragment>
  )
}

export default Paymentlanding