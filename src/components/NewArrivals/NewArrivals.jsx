import ArrivalsSlider from '../ArrivalsSlider/ArrivalsSlider'
import SectionHeader from '../SectionHeader/SectionHeader'
import './NewArrivalsStyle.css'

const NewArrivals = () => {
  return (
    <div className='new-arrivals'>
      <SectionHeader title="NEW ARRIVALS" text="FIND THE PERFECT PHONE FOR YOU"/>
      <ArrivalsSlider />
    </div>
  )
}

export default NewArrivals