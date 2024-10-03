import React from 'react'
import './Hero.css'
import profile_img from '../../assets/logo-gamer.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>Welcome to NASA Gaming,</span> a learning-based gaming website from Mumbai, India.</h1>
      <p>We are a platform based in Mumbai, India, designed to combine fun gaming experiences with learning opportunities. Join us to explore a world where entertainment meets education.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with us</AnchorLink></div>
        <div className="hero-resume">Learn More</div>
      </div>
    </div>
  )
}

export default Hero
