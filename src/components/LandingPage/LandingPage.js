import React, { useState } from 'react'
import logo1 from '../../assets/images/logo1.png'
import landingDarkVersion from '../../assets/images/uploads/landing-dark-version.png'
import landinglightVersion from '../../assets/images/uploads/landing-light-version.png'
import '../../CSS/plugins.css'
import '../../CSS/style.css'
import background from '../../assets/images/uploads/user-hero-bg.jpg'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom'

const LandingPage = (props) => {
    
    return (
        <>
            <div className="landing-hero" style={{ backgroundImage: `url(${background})` }}>
                <img src={logo1} alt="Logo" />

                <div className="row landing-hero-text">
                    <Fade right>
                        <h2>MOST COMPLETED</h2>
                    </Fade>
                    <h2 className="text-yellow">
                        <Fade right>
                            FILM REVIEW  &middot;  MOVIE DATABASE
                        </Fade>
                    </h2>
                    <Fade right>
                        <h2>HTML TEMPLATE</h2>
                    </Fade>
                </div>
                <a href="#" className="redbtn" id="discover-now">DISCOVER NOW</a>
            </div>

            <div className="landing-version">
                <div className="container">
                    <div className="col-md-6">
                        <Fade right>
                            <img src={landingDarkVersion} alt="Dark Version" />
                        </Fade>
                        <Fade right>
                            <h2>DARK VERSION</h2>
                        </Fade>
                        <NavLink to='/home' className="redbtn">
                            <Fade right>SEE DEMO</Fade>
                        </NavLink>
                    </div>
                    <div className="col-md-6">
                        <Fade right>
                            <img src={landinglightVersion} alt="Light Version" />
                        </Fade>
                        <Fade right>
                            <h2>LIGHT VERSION</h2>
                        </Fade>
                        <NavLink to='/home' className="redbtn">
                            <Fade right>SEE DEMO</Fade>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="ft-copyright-landing">
                <p><a href="/">Templates Hub</a></p>
            </div>
        </>
    )

}

export default LandingPage