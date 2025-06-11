import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import AllRouters from './routes/AllRouters'
import Agent from './components/Agent'
import 'bootstrap/dist/css/bootstrap.min.css';
import RealEstateAgent from './components/RealEstateAgent'
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