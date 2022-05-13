import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import SellPage from './pages/sell/Sell'
import SellMyBikePage from './pages/sell/Sell-MyBike'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/sell/my-bike" element={<SellMyBikePage />} />
    </Routes>
  )
}

export default RouteList
