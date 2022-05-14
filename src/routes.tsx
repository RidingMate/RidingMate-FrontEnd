import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketPage from './pages/market/Market'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/market" element={<MarketPage />} />
    </Routes>
  )
}

export default RouteList
