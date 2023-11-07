import { Container } from 'react-bootstrap'
import SectionHeader from '../SectionHeader/SectionHeader'
import './WhatsDifferentStyle.css'
import SectionCard from '../SectionCard/SectionCard'
import image1 from './../../assets/imgs/different1.webp'
import image2 from './../../assets/imgs/different2.webp'
import image3 from './../../assets/imgs/different3.webp'


const WhatsDifferent = () => {
  return (
      <Container className='whats-different'>
        <SectionHeader title="WHAT MAKES THE ESSENTIAL DIFFERENT?" text="EXPERIENCE HIGH PERFORMANCE AND SECURE"/>
        <div className='different-images'>
          <SectionCard url={image1} title1="PERFECT CUT" title2="DUAL CAMERA" text="Tristique senectus et netus et malesuada ant reiet fames."/>
          <SectionCard url={image2} title1="PRETTY" title2="INTELLIGENT PROCESSING" text="Consequat ac habit amet asse felis donec et odio pellentesque diam."/>
          <SectionCard url={image3} title1="MOST POPULAR" title2="8GB DDR5 RAM" text="Dictum varius duis at consectetur lorem donec massa sap faucibus."/>
        </div>
      </Container>
  )
}

export default WhatsDifferent