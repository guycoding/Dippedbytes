import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Measurements from './components/pages/measurements';
import Footer from './components/Footer/Footer';
import './App.css'
import BMI from './components/pages/BMI';
import Calculations from './components/pages/Calculations';
import Machines from './components/pages/machines';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <Sidebar/>
        <main className="main-content">
          <Routes>
            <Route path='/calculators' element={<Calculations/>}/>
            <Route path='/bmi'element ={<BMI/>}/>
            <Route path='/measurements' element={<Measurements/>}/>
            <Route path='/machines' element = {<Machines/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App