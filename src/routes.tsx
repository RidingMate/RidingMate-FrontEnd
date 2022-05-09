import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default RouteList
