import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MarketDetail from './pages/MarketDetail'
import SellPage from './pages/sell/Sell'
import SellMyBikePage from './pages/sell/SellMyBike'
import SellNewBikeWritePage from './pages/sell/SellNewBikeWrite'
import SellMyBikeWritePage from './pages/sell/SellMyBikeWrite'
import MarketPage from './pages/market/Market'
import MyBikeRecordsPage from './pages/mybike/records'
import MyBikeListPage from './pages/mybike/list'
import MyBikeRegistPage from './pages/mybike/regist'
import LoginPage from './pages/users/Login'
import SignUpPage from './pages/users/SignUp'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/product/*" element={<MarketDetail />} />
      <Route path="/mybike" element={<MyBikeListPage />} />
      <Route path="/mybike/regist" element={<MyBikeRegistPage />} />
      <Route path="/mybike/records" element={<MyBikeRecordsPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/sell/mybike" element={<SellMyBikePage />} />
      <Route path="/sell/mybike/write" element={<SellMyBikeWritePage />} />
      <Route path="/sell/newbike/write" element={<SellNewBikeWritePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="*" element={<div>PAGE NOT FOUND</div>} />
    </Routes>
  )
}

export default RouteList
