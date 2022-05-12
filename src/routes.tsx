import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import SellPage from './pages/Sell'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sell" element={<SellPage />} />
    </Routes>
  )
}

export default RouteList
