import { Container } from 'react-bootstrap'
import './FooterStyle.css'
import Links from '../Links/Links'

const Footer = () => {
  return (
    <footer class="text-center py-5 text-white">
      <Container>
        <h6 class="pb-2">SUBSCRIBE NOW</h6>
        <h2 class="pb-2">GET OUR UPDATES ALWAYS FAST</h2>
        <p class="pb-2">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
        <div class="input-group mb-5 mx-auto position-relative">
          <input type="text" id="footer-input" placeholder="Enter your email id" class="form-control shadow-none rounded-pill p-2" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <button class="rounded-circle position-absolute"></button>
        </div>
        <Links />
      </Container>
    </footer>
  )
}

export default Footer