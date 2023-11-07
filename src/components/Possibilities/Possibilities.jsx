import SectionHeader from '../SectionHeader/SectionHeader'
import './PossibilitiesStyle.css'
import Image from './../../assets/imgs/possibilities.webp'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import SectionCard from '../SectionCard/SectionCard'
import img1 from './../../assets/imgs/possibilities1.webp'
import img2 from './../../assets/imgs/possibilities2.webp'
import img3 from './../../assets/imgs/possibilities3.webp'
import img4 from './../../assets/imgs/possibilities4.webp'

const Possibilities = () => {
  return (
    <Container className='possibilities'>
      <SectionHeader title="POSSIBILITIES. PERFORMANCE. POWER." text="FASTER PROCESSING WITH LESS POWER"/>
      <div className="possibilities-img">
        <img src={Image} alt="Possibilities Img" />
        <div className="dots">
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} />
            <div className='d-none d-lg-block'>
              <SectionCard url={img1} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} />
            <div className='d-none d-lg-block'>
              <SectionCard url={img2} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} />
            <div className='d-none d-lg-block'>
              <SectionCard url={img3} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} />
            <div className='d-none d-lg-block'>
              <SectionCard url={img4} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Possibilities