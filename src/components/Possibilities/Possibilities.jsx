import SectionHeader from '../SectionHeader/SectionHeader'
import './PossibilitiesStyle.css'
import Image from './../../assets/imgs/possibilities.webp'
import { Button, Container, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faClose } from '@fortawesome/free-solid-svg-icons'
import SectionCard from '../SectionCard/SectionCard'
import img1 from './../../assets/imgs/possibilities1.webp'
import img2 from './../../assets/imgs/possibilities2.webp'
import img3 from './../../assets/imgs/possibilities3.webp'
import img4 from './../../assets/imgs/possibilities4.webp'
import { useState } from 'react'
import ProcessorImage from './../../assets/imgs/possibilities1.webp'
import DualSimImage from './../../assets/imgs/possibilities2.webp'
import CameraImage from './../../assets/imgs/possibilities3.webp'
import BackupImage from './../../assets/imgs/possibilities4.webp'


const Possibilities = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <Container className='possibilities'>
      <SectionHeader title="POSSIBILITIES. PERFORMANCE. POWER." text="FASTER PROCESSING WITH LESS POWER"/>
      <div className="possibilities-img">
        <img src={Image} alt="Possibilities Img" />
        <div className="dots">
          {/* ////////// First Dot ////////// */}
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} onClick={handleShow1}/>
            <div className='d-none d-lg-block'>
              <SectionCard url={img1} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Body>
              <img src={ProcessorImage} alt="processor" />
              <h4 class="my-3">SCORPION PROCESSOR</h4>
              <p class="fs-6">Tristique senectus et netus et malesuada fames ac turpis.</p>
              <div className="modal-close-btn" onClick={handleClose1}>
                <FontAwesomeIcon icon={faClose}/>
              </div>
            </Modal.Body>
          </Modal>
          {/* ////////// Second Dot ////////// */}
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} onClick={handleShow2}/>
            <div className='d-none d-lg-block'>
              <SectionCard url={img2} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Body>
              <img src={DualSimImage} alt="Dual Sim Img" />
              <h4 class="my-3">DUAL SIM CARDS</h4>
              <p class="fs-6">Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
              <div className="modal-close-btn" onClick={handleClose2}>
                <FontAwesomeIcon icon={faClose}/>
              </div>
            </Modal.Body>
          </Modal>
          {/* ////////// Third Dot ////////// */}
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} onClick={handleShow3}/>
            <div className='d-none d-lg-block'>
              <SectionCard url={img3} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Body>
              <img src={CameraImage} alt="Camera Img" />
              <h4 class="my-3">48 MP CAMERA</h4>
              <p class="fs-6">Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>            </Modal.Body>
              <div className="modal-close-btn" onClick={handleClose3}>
                <FontAwesomeIcon icon={faClose}/>
              </div>
          </Modal>
          {/* ////////// Fourth Dot ////////// */}
          <span className='position-relative'>
            <FontAwesomeIcon icon={faCircle} onClick={handleShow4}/>
            <div className='d-none d-lg-block'>
              <SectionCard url={img4} title2="48 HRS BACKUP" text="Natoque penatibus et magnis dis parturient montes nascetur."/>
            </div>
          </span>
          <Modal show={show4} onHide={handleClose4}>
            <Modal.Body>
              <img src={BackupImage} alt="Backup Img" />
              <h4 class="my-3">48 HRS BACKUP</h4>
              <p class="fs-6">Natoque penatibus et magnis dis parturient montes nascetur.</p>
              <div className="modal-close-btn" onClick={handleClose4}>
                <FontAwesomeIcon icon={faClose}/>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Container>
  )
}

export default Possibilities