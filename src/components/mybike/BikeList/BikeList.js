import { useNavigate } from 'react-router-dom'
import * as S from './BikeList.style'

import Button from 'src/elements/Button'
import Bike from '../Bike'

const BikeList = () => {
  const navigate = useNavigate()

  return (
    <S.ListWrap>
      <Bike />
      <Bike />
      <Button
        className={'btn-regist'}
        content={'새 바이크 등록하기'}
        onClick={() => navigate('/mybike/regist')}
      />
    </S.ListWrap>
  )
}

export default BikeList
