import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CardsPage from './pages/CardsPage'

const App = () => {
  return (
    <div>
    <Navbar />
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cards' element={<CardsPage/>} />
    </Routes>
    </div>
  )
}

export default App