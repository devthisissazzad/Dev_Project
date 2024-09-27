import React from 'react'
import { Outlet } from "react-router-dom";

const LoginUserLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default LoginUserLayout