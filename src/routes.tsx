import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketDetail from './pages/MarketDetail'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/*" element={<MarketDetail />} />
    </Routes>
  )
}

export default RouteList
