import './CarouselCaptionStyle.css'

const CarouselCaption = ({title, text, button}) => {
  return (
    <div className='carousel-caption'>
      <h3>{title}</h3>
      <p>{text}</p>
      {button}
    </div>
  )
}

export default CarouselCaption