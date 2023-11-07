import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../SectionHeader/SectionHeader'
import './CustomersStyle.css'
import Img from './../../assets/imgs/customers.jpg'
import CustomersAccordion from '../CustomersAccordion/CustomersAccordion'

const Customers = () => {
  return (
    <div className='customers'>
      <Container>
        <SectionHeader title="SEE WHY CUSTOMERS LOVE THE OUR MOBILES" text="DESIGNED TO PERFECTION"/>
        <Row>
          <Col xs={12} lg={6}>
            <div className="customers-img">
              <img className='object-fit-cover mw-100' src={Img} alt="" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <CustomersAccordion />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Customers