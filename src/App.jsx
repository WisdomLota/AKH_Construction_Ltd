import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsOfUse from './pages/TermsOfUse'
import './styles/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/terms-of-use' element={<TermsOfUse/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
