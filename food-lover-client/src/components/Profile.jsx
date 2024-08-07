/* eslint-disable react/prop-types */
import React, { useCallback, useContext } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import UserProfile from '../pages/dashboard/UserProfile'

const Profile = ({ user }) => {
  const {SignOUt} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogOut = () => {
    SignOUt().then(() => {
      
    }).catch((error) => {
      console.log(error)
    });
    alert ("logout success!")
    navigate("/signup", {replace: true})
  }
  return (
    <div>       
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile">          
            Profile
          </Link>
        </li>
        <li><a>Order</a></li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogOut}>Logout</a></li>
      </ul>
    </div> 
    </div>
    
    
  )
}

export default Profile
