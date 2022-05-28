import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketDetail from './pages/MarketDetail'
import SellPage from './pages/sell/Sell'
import SellMyBikePage from './pages/sell/Sell-MyBike'
import SellMyBikeWritePage from './pages/sell/Sell-MyBike-Write'
import MarketPage from './pages/market/Market'
import MyBikeRecordsPage from './pages/mybike/MyBikeRecordsPage'
import MyBikeListPage from './pages/mybike/MyBikeListPage'
import MyBikeRegistPage from './pages/mybike/MyBikeRegistPage'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/*" element={<MarketDetail />} />
      <Route path="/mybike" element={<MyBikeListPage />} />
      <Route path="/mybike/regist" element={<MyBikeRegistPage />} />
      <Route path="/mybike/records" element={<MyBikeRecordsPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/sell/my-bike" element={<SellMyBikePage />} />
      <Route path="/sell/my-bike/write" element={<SellMyBikeWritePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="*" element={<div>PAGE NOT FOUND</div>} />
    </Routes>
  )
}

export default RouteList
