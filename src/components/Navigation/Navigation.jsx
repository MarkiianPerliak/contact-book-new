import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css"
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/user/userOperations'

export const Navigation = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <NavLink className={({isActive}) => isActive ? s.activelink : s.link} to={"/"}>SignIn</NavLink>
        {/* <NavLink to={"/content"}>Content</NavLink> */}
        {/* <NavLink to={"/search"}>Posts</NavLink> */}
        <NavLink className={({isActive}) => isActive ? s.activelink : s.link} to={"/signup"}>SignUp</NavLink>
        <NavLink className={({isActive}) => isActive ? s.activelink : s.link} to={"/contacts"}>Contacts</NavLink>
        <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  )
}