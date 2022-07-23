import React, { useState } from 'react'
import {FaGripLines} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import {HiArrowSmRight} from 'react-icons/hi'
// import { Link, Outlet } from 'react-router-dom'
import CaseStudies from './CaseStudies'
import Clients from './Clients'
import Footer from './Footer'
import './Main.css'

export default function Main() {
	const[show,setShow]=useState(false)
  return (
	<div>
		<div className='bgc'>
	  <div className='container'>		
 		{/* ===============main nav bar======================== */}
 		<div className='navbar'>
 			<img src='https://sketchbrahma.com/assets/images/sb_logo_white_version.svg'/>
 			<ul className='nav'><li>Let's Collaborate</li>
 			<li className='menu' onClick={()=>setShow(true)}><FaGripLines/></li>
 			{show?<div className='menulist'>!
 				<ol>
 					<h1 style={{color:"black"}} onClick={()=>setShow(false)}><FaTimes/></h1>
 					<li>About</li>
 					<li>case studies</li>
 					<li>clients</li>
 					<li>career</li>
 					<li>contact</li>

 				</ol>

 			</div>:null}</ul>
			
 			{/* <p>Let's Collaborate <FaGripLines className='menu'/></p>  */}
 			</div>
			{/* ==================2nd nav======================= */}
			<div className='navtwo'>
			<h1>Building end-to-end digital solutions for start-ups, SMEs & large enterprises</h1>
			<button className='viewmore'>view our case studies <HiArrowSmRight/></button>
			</div>
			{/* ===============3rd nav================ */}
			<div className='navthree'>
				<h2>Brands that trust us </h2><hr/>
				<div className='images'>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/airtel.png'/>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/ather.png'/>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/comviva.png'/>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/mfine.png'/>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/zest_money.png'/>
		<img src='https://sketchbrahma.com/assets/images/client_logo/white_version/licious.png'/>
		</div>
			</div>



	</div>
	</div>
	         {/* =============What do we do?============== */}
	<div className='bodyone'>
			 <h3>What do we do?</h3>
		 <p>We are a full stack design and development studio crafting end-to-end digital solutions including research, ui ux design, front-end, back-end & mobile app development services.</p>
		 </div>
		 {/* ==========Ux Ui lists*/}
		 <div className='lists'>
		 <div className="container">
		<div className="row">
		<div className=" col-md col-sm-6 col-xs-12">
		 <ol className='Ux'>
			<h4>UX Design</h4>
			<li>User Research</li>
			<li>Heuristic Evaluation</li>
			<li>User Persona</li>
			<li>Information Architecture</li>
			<li>Wireframing</li>
			<li>Usability Testing</li>
		 </ol></div>
		<div className=" col-md col-sm-6 col-xs-12">
		 <ol className='Ux'>
		 <h4> UI Design</h4>
		 <li>Branding</li>
		 <li>Design System</li>
		 <li>Illustrations</li>
		 <li>Visual Design</li>
		 <li>Interaction Design</li>
		 <li>Prototyping</li>
		</ol></div>
		<div className="col-md col-sm-6 col-xs-12">
		<ol className='Ux'>
		<h4>Development</h4>
		<li>UI Development</li>
		<li>React Js Development</li>
		<li>Angular Development</li>
		<li>Node Js Development</li>
		<li>Ruby on Rails Development</li>
		<li>React Native Development</li>
		</ol></div>
		</div>
		</div>
		 </div>
		  <CaseStudies/>
       <h5>view all case studies</h5>

	  <Clients/>
	   <div className="expertise">
		<h1 className='heading'>Our industry expertise</h1>
		<div className='grid'>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/fintech.png'/>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/automotive.png'/>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/enterprise.png'/>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/telecom.png'/>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/it_consulting.png'/>
		<img src='https://sketchbrahma.com/assets/images/industry_logo/agri_tech.png'/>
		<p className='name'>Fintech</p><p className='name'>Automotive</p><p className='name'>Enterprise</p><p className='name'>Telecom</p><p className='name'>IT / Consulting</p>
		<p className='name'>Agri Tech</p>
		</div>
		
		 </div>
		 <Footer/>
		 {/* <Outlet/> */}
			</div>
			
		 																
  )
}

