import Customers from '../../components/Customers/Customers'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Innovate from '../../components/Innovate/Innovate'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Possibilities from '../../components/Possibilities/Possibilities'
import WhatsDifferent from '../../components/WhatsDifferent/WhatsDifferent'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatsDifferent />
      <Possibilities /> 
      <Innovate />
      <NewArrivals />
      <Customers />
    </div>
  )
}

export default Home