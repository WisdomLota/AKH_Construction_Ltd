import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/Home'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import AboutPage from './pages/AboutPage'
import RealtyPage from './pages/RealtyPage'
import PropertyDetail from './components/PropertyDetail'
import DevUpdatesPage from './pages/DevUpdatesPage'
import {properties} from "./data/propertiesData"
import './styles/App.css'

import { createContext } from 'react'

// Created a context to share property data across components
export const PropertyContext = createContext();

function App() {

  return (
    <>
      <PropertyContext.Provider value={properties}>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/terms-of-use' element={<TermsOfUse/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/dev-updates' element={<DevUpdatesPage/>}/>
            
            {/* routes for property pages */}
            <Route path='/realty' element={<RealtyPage/>}/>
            <Route path='/property/:id' element={<PropertyDetail/>}/>
          </Routes>
        </Router>
      </PropertyContext.Provider>
    </>
  )
}

export default App