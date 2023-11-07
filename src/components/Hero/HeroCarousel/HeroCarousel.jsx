import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './../CarouselImage/CarouselImage';
import Image1 from './../../../assets/imgs/phono-slider-1.webp'
import Image2 from './../../../assets/imgs/phono-slider-2.webp'
import Image3 from './../../../assets/imgs/phono-slider-3.webp'
import './HeroCarouselStyle.css'
import CarouselCaption from '../CarouselCaption/CarouselCaption';

function HeroCarousel() {

  return (
    <Carousel fade>
      {/* Item 1 */}
      <Carousel.Item>
        <CarouselImage text="First slide" url={Image1}/>
        <CarouselCaption title="First slide label" text="Nulla vitae elit libero, a pharetra augue mollis interdum." />
      </Carousel.Item>
      {/* Item 2 */}
      <Carousel.Item>
        <CarouselImage text="Second slide" url={Image2} dark={true}/>
        <CarouselCaption className='second-slide' title="sec slide label" text="Nulla vitae elit libero, a pharetra augue mollis interdum." />
      </Carousel.Item>
      {/* Item 3 */}
      <Carousel.Item>
        <CarouselImage text="Third slide" url={Image3}/>
        <CarouselCaption title="th slide label" text="Nulla vitae elit libero, a pharetra augue mollis interdum." />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;