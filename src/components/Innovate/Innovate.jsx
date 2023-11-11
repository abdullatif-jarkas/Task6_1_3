import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../SectionHeader/SectionHeader'
import './InnovateStyle.css'
import Img from './../../assets/imgs/innovate-qualities.webp'
import InnovateCard from '../InnovateCard/InnovateCard'
import Image1 from './../../assets/imgs/innovate1.png'
import Image2 from './../../assets/imgs/innovate2.png'
import Image3 from './../../assets/imgs/innovate3.png'
import Image4 from './../../assets/imgs/innovate4.png'
import Image5 from './../../assets/imgs/innovate5.png'
import Image6 from './../../assets/imgs/innovate6.png'

const Innovate = () => {
  return (
    <div className='innovate'>
      <SectionHeader title="INNOVATIVE QUALITIES & FEATURES" text="SHOW YOURS TO THE WORLD"/>
      <Container className='my-5'>
        <Row>
          <Col xs={12} sm={6} xl={4} className='first-col d-flex flex-column justify-content-around order-1 order-xl-0'>
            <InnovateCard url={Image1} title="INTELLIGENT PROCESSOR" text="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri" left={true}/>
            <InnovateCard url={Image2} title="HD SURROUND AUDIO" text="Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am." left={true}/>
            <InnovateCard url={Image3} title="STYLISH BEVEL EDGES" text="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid" left={true}/>
          </Col>
          <Col xs={12} xl={4} className='order-xl-1'>
            <div className="innovate-img-container mx-auto">
              <img className='w-100' src={Img} alt="Phone Img" />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={4} className='second-col d-flex flex-column justify-content-around order-1 order-xl-2'>
            <InnovateCard url={Image4} title="4.0 WIFI SPECS" text="Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum sed iacus." right={true}/>
            <InnovateCard url={Image5} title="MULIT TASKING & THREADING" text="Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi." right={true}/>
            <InnovateCard url={Image6} title="CLOUD STORAGE" text="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun" right={true}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Innovate