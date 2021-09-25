import React from 'react'
import '../CSS/plugins.css'
import '../CSS/style.css'
import logo1 from '../assets/images/logo1.png'
import errorImage from '../assets/images/uploads/err-img.png'
import { NavLink } from 'react-router-dom'


const PageNotFound = (props) => {
  return(
    
    <div className="page-single-2">
        <div className="container">
            <div className="row">
                <div className="middle-content">
                    <a href="index-2.html"><img className="md-logo" src={logo1} alt="" /></a>
                    <img src={errorImage} alt="" />
                    <h1>Page not found</h1>
                    <NavLink to='/' className="redbtn">go home</NavLink>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default PageNotFound