import { Route,   Routes } from 'react-router'
import Navbar from './components/utils/Navbar'
import Home from './components/pages/home/Home'
import Footer from './components/utils/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App