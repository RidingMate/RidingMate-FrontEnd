import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketDetail from './pages/MarketDetail'
import MyBike from './pages/MyBike'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/*" element={<MarketDetail />} />
      <Route path="/mybike" element={<MyBike myBikeList={undefined} />} />
      <Route path="*" element={<div>PAGE NOT FOUND</div>} />
    </Routes>
  )
}

export default RouteList
