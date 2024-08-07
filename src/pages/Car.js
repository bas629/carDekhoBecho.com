import React from 'react'
import { useLocation } from 'react-router-dom'
function Car() {
    let location=useLocation();
    const t=location.pathname.split('/').at(-1);



  return (
    <div>{t}</div>
  )
}

export default Car