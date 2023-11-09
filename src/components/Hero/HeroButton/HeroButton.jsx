import './HeroButtonStyle.css'

const HeroButton = ({middle}) => {
  return (
    <div className='hero-button'>
      <a href="##" class={middle? "btn btn-light border-black rounded-pill p-3 px-5" : "btn btn-dark border-white rounded-pill p-3 px-5"}>SHOP NOW</a>
    </div>
  )
}

export default HeroButton