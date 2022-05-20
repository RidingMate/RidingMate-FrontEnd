import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketDetail from './pages/MarketDetail'
import MyBike from './pages/MyBike'
import SellPage from './pages/sell/Sell'
import SellMyBikePage from './pages/sell/Sell-MyBike'
import SellMyBikeWritePage from './pages/sell/Sell-MyBike-Write'
import MarketPage from './pages/market/Market'
import MyBikeRegistPage from './pages/MyBike/MyBikeRegistPage'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/*" element={<MarketDetail />} />
      <Route path="/mybike" element={<MyBike myBikeList={undefined} />} />
      <Route path="/mybike/regist/*" element={<MyBikeRegistPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/sell/my-bike" element={<SellMyBikePage />} />
      <Route path="/sell/my-bike/write" element={<SellMyBikeWritePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="*" element={<div>PAGE NOT FOUND</div>} />
    </Routes>
  )
}

export default RouteList
