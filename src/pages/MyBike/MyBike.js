import * as S from './MyBike.style'
import Button from '../../elements/Button/Button'
import RegistForm from './MyBikeRegistPage'
import { useNavigate } from 'react-router-dom'

const MyBike = ({ myBikeList }) => {
  const navigate = useNavigate()
  return (
    <S.Wrap>
      <S.Title>
        <h2>MY BIKE</h2>
        <p>내 바이크</p>
      </S.Title>
      {myBikeList ? (
        <RegistForm />
      ) : (
        <S.NoBike>
          <p>등록된 바이크가 없어요 :(</p>
          <Button
            content={'새 바이크 등록하기'}
            onClick={() => navigate('/mybike/regist')}
          />
        </S.NoBike>
      )}
    </S.Wrap>
  )
}

export default MyBike
