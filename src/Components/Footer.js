import React, { Component } from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {HiArrowSmRight} from 'react-icons/hi'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* ============footer ============= */}
<div className='bodythree'>
		 <p className='headingss'>Let's start building the future together</p>
		 <button className='btns'> Let's Collaborate <HiArrowSmRight/></button>
		 </div>
		 <hr/>
		 <div className='footer'>
		 <div className="container">
		<div className="row">
			
		<div className=" col-md col-sm-3 col-xs-12">
			<img src='https://sketchbrahma.com/assets/images/footer/logo.png' className='footerlogo'/>
			<p className='footerhead'>We build digital solutions for startups and large enterprises.</p>
			<a href={"https://www.linkedin.com/"}><AiFillLinkedin/></a>
			<a href={"https://www.facebook.com/"}><FaFacebookSquare/></a>
			<a href={"https://www.instagram.com/"}><FiInstagram/></a></div>
		<div className=" col-md col-sm-3 col-xs-12">
		 <ol className='footerlist'>
			<h4 className='head'>Company</h4>
			<li>Homepage</li>
			<li>About</li>
			<li>Our Work</li>
			<li>Clients</li>
			<li>Career</li>
			<li>Contact</li>
			<li>Blog </li>
		 </ol></div>
		<div className=" col-md col-sm-3 col-xs-12">
		 <ol className='footerlist'>
		 <h4 className='head'> Industries</h4>
		 <li>Finance & Fintech</li>
		<li>Automotive</li>
		<li>Enterprise</li>
		<li>IT / Consulting</li>
		<li>Telecom</li>
		<li>Agri Tech</li>
		<li>Food Tech</li>
		<li>Healthcare</li>
		</ol></div>
		<div className="col-md col-sm-3 col-xs-12">
		<ol className='footerlist'>
		<h4 className='head'>Development</h4>
		<li>UI UX Design </li>
  <li>UI Development</li>
   <li>React Js Development</li>  
	 <li>Angular Development</li>
   <li>	Node Js Development </li>
   <li>React Native Development</li>
		</ol></div>
		</div>
		</div>
<hr/>
		 {/* <!-- Copy Rights --> */}
 <div class="copy-rights">
 <p className='copytext'>© 2021 Sketch Brahma Technologies Pvt Ltd</p>
 </div>
			</div>
      </div>
    )
  }
}
