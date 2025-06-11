import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Slider from './component/Slider'
import AllRouters from './routes/AllRouters'
import Agent from './component/Agent'
import 'bootstrap/dist/css/bootstrap.min.css';
import RealEstateAgent from './component/RealEstateAgent'
import Services from './pages/Services'


const App = () => {
  return (
    <>
    <Header/>
    <AllRouters/>
    {/* <RealEstateAgent/> */}
    {/* <Agent/> */}
    <Footer/>
    </>
  )
}

export default App