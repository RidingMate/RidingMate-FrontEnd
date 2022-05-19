import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import MyBike from './pages/MyBike'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mybike" element={<MyBike myBikeList={undefined} />} />
      <Route path="*" element={<div>PAGE NOT FOUND</div>} />
    </Routes>
  )
}

export default RouteList
