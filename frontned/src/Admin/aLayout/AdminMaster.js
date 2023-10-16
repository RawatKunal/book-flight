import React from 'react'
import AHeader from './AHeader'
import AFooter from './AFooter'
import { Outlet } from 'react-router-dom'

export default function AdminMaster() {
  return (
   <>
    <AHeader/>
    <Outlet/>
    <AFooter/>
   
   
   </>
  )
}
