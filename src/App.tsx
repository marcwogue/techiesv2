import { Route,   Routes } from 'react-router'
import Navbar from './components/utils/Navbar'
import Home from './components/pages/home/Home'
import Footer from './components/utils/Footer'
import About from './components/pages/about/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App