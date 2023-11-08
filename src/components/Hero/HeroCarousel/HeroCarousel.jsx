import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './../CarouselImage/CarouselImage';
import Image1 from './../../../assets/imgs/phono-slider-1.webp'
import Image2 from './../../../assets/imgs/phono-slider-2.webp'
import Image3 from './../../../assets/imgs/phono-slider-3.webp'
import CarouselCaption from '../CarouselCaption/CarouselCaption';
import './HeroCarouselStyle.css'

function HeroCarousel() {
  return (
    <Carousel fade>
      {/* Item 1 */}
      <Carousel.Item>
        <CarouselImage text="First slide" url={Image1}/>
        <CarouselCaption title="Zania Black Edition" text="Curvy Bevel Dual Audio" />
      </Carousel.Item>
      {/* Item 2 */}
      <Carousel.Item>
        <CarouselImage text="Second slide" url={Image2} dark={true}/>
        <CarouselCaption title="4K Resolution" text="Exclusive Steel Frame" />
      </Carousel.Item>
      {/* Item 3 */}
      <Carousel.Item>
        <CarouselImage text="Third slide" url={Image3}/>
        <CarouselCaption title="Delta Zertiga Processor" text="Full Screen Display" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;