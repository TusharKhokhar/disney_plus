import React from 'react'
import '../../CSS/plugins.css'
import '../../CSS/style.css'
import StarIcon from '@mui/icons-material/Star';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import slideImage1 from '../../assets/images/uploads/slider1.jpg'
import slideImage2 from '../../assets/images/uploads/slider2.jpg'
import slideImage3 from '../../assets/images/uploads/slider3.jpg'
import slideImage4 from '../../assets/images/uploads/slider4.jpg'
import slideImage5 from '../../assets/images/uploads/slider4.jpg'
import slideImage6 from '../../assets/images/uploads/slider4.jpg'
import slideImage7 from '../../assets/images/uploads/slider4.jpg'
import { settings } from '../../API/Settings';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';

const sliderImage = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5, slideImage6, slideImage7]

const useStyles = makeStyles({
    iconColor: {
        color: 'white',
        marginRight: '3px',
        marginLeft: '3px',
        marginTop: '-3px'
    },
});

const Carousel = (props) => {
    const classes = useStyles();

    return (

        <div className="slider movie-items">
            <div className="container">
                <div className="row">
                    <div className="social-link">
                        <p>Follow us :
                            <FacebookOutlinedIcon className={classes.iconColor} />
                            <YouTubeIcon className={classes.iconColor} />
                            <GoogleIcon className={classes.iconColor} />
                            <TwitterIcon className={classes.iconColor} />

                        </p>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {sliderImage.map((item, index) => {
                                return (
                                    <div className="movie-item" key={index}>
                                        <div className="mv-img">
                                            <a href="#"><img src={item} alt="image" width="285" height="437" /></a>
                                        </div>
                                        <div className="title-in">
                                            <div className="cate">
                                                <span className="blue"><a href="#">Sci-fi</a></span> <span class="orange"><a href="#">advanture</a></span>
                                            </div>
                                            <h6><a href="#">Interstellar</a></h6>
                                            <p><StarIcon style={{ color: 'yellow', marginTop: '-8px' }} /><span>7.4</span> /10</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Carousel