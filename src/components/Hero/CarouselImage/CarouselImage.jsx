import './CarouselImageStyel.css'

const CarouselImage = ({text, url}) => {
  return (
    <div>
      <img src={url} alt="" className='w-100' />
    </div>
  )
}

export default CarouselImage