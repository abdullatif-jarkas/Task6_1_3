import Slider from "react-slick";
import ArrivalsCard from "../ArrivalsCard/ArrivalsCard";
import './ArrivalsSliderStyle.css'
import { useEffect } from "react";
import 'regenerator-runtime/runtime';
import axios from 'axios';

var dataArray = [];

const handleData = () => {
  axios.get("https://dummyjson.com/products/")
  .then(response => dataArray.push(response.data.products))
}
const ArrivalsSlider = () => {

  useEffect(() => {
    handleData();
  },[])
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="arrivals-slider">
      <Slider {...settings}>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard />
        </div>
      </Slider>
    </div>
  );
}

export default ArrivalsSlider