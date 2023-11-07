import './CarouselCaptionStyle.css'

const CarouselCaption = ({title, text}) => {
  return (
    <div className='carousel-caption'>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default CarouselCaption