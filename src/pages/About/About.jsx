import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Possibilities from "../../components/Possibilities/Possibilities"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import WhatsDifferent from "../../components/WhatsDifferent/WhatsDifferent"
import './AboutStyle.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const About = () => {
  return (
    <div className="about py-5 my-5">
      <div className="my-5 pb-5">
        <h1>Hello <span>FocalX</span></h1>
        <p className="pt-5 fs-4">I wanted to take a moment to express my deep gratitude. Thank you, FocalX Agency, for the invaluable experiences and opportunities you have provided me. Your support has been exceptional.<FontAwesomeIcon icon={faHeart} className='ms-2' /></p>
        <hr />
        <p className="fs-4">To my dedicated instructors, your guidance and passion for teaching have made a lasting impact. Thank you for imparting knowledge and inspiring me to reach new heights.</p>
        <h4 className="pt-5">You are the best</h4>
        <h5 className="instructors">Karam Mustafa - Mohammed Alkordy - Rama Al Ali - Faisal Qashmr</h5>
      </div>
    </div>
  )
}

export default About