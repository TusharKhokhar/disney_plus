import React from 'react'
import Slider from 'react-slick'
import StarIcon from '@mui/icons-material/Star';
import './Movies.css'
import imageUrl1 from '../../assets/images/uploads/mv-it1.jpg'
import imageUrl2 from '../../assets/images/uploads/mv-it2.jpg'
import imageUrl3 from '../../assets/images/uploads/mv-it3.jpg'
import imageUrl4 from '../../assets/images/uploads/mv-it4.jpg'
import imageUrl5 from '../../assets/images/uploads/mv-it5.jpg'
import imageUrl6 from '../../assets/images/uploads/mv-it6.jpg'
import { settings } from '../../API/Settings'
import { NavLink } from 'react-router-dom';

const images = [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6]

const Movies = (props) => {

    return (
        <div className="movie-items">
            <div className="container">
                <div className="row ipad-width">
                    <div className="col-md-12">
                        <div className="title-hd">
                            <h2>in theater</h2>
                            <NavLink to='/viewallmovies' className="viewall">View all</NavLink>
                        </div>
                        <div className="tabs">
                            <ul className="tab-links">
                                <li className="active"><a href="#tab1">#Popular</a></li>
                                <li><a href="#tab2"> #Coming soon</a></li>
                                <li><a href="#tab3">  #Top rated  </a></li>
                                <li><a href="#tab4"> #Most reviewed</a></li>
                            </ul>

                            <div className="tab-content">
                                <div id="tab1" className="tab active">
                                    <div className="row">
                                        <div>
                                            <Slider {...settings}>
                                                {images.map((item, index) => {
                                                    return <div className="slide-it" key={index}>
                                                        <div className="movie-item">
                                                            <div className="mv-img">
                                                                <img src={item} alt="" width="185" height="284" />
                                                            </div>
                                                            <div className="hvr-inner">
                                                                <a href="moviesingle.html"> Read more</a>
                                                            </div>
                                                            <div className="title-in" style={{ marginLeft: '5px', marginBottom: '0px' }}>
                                                                <h6><a href="#">Interstellar</a></h6>
                                                                <p><span><StarIcon style={{ color: 'yellow', marginTop: '-8px' }} /> 7.4</span> /10</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                })}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Movies