import Slider from "react-slick";
import ArrivalsCard from "../ArrivalsCard/ArrivalsCard";
import './ArrivalsSliderStyle.css'
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

const ArrivalsSlider = () => {

  // declaring data state
  const [data, setData] = useState([]);

  // declaring a function to fetch the data from the api
  const handleData = () => {
    axios.get("https://dummyjson.com/products/")
    .then(response => {setData([...response.data.products])})
  }

  // calling the function when the page is rendered for the first time
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
          <ArrivalsCard data={data} index={0}/>
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard data={data} index={1}/>
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard data={data} index={2}/>
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard data={data} index={3}/>
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard data={data} index={4}/>
        </div>
        <div className="arrivals-slide text-center">
          <ArrivalsCard data={data} index={5}/>
        </div>
      </Slider>
    </div>
  );
}

export default ArrivalsSlider