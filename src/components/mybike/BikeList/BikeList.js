import * as S from './BikeList.style'

import Button from 'src/elements/Button'
import Bike from '../Bike'

const BikeList = () => {
  return (
    <S.ListWrap>
      <Bike />
      <Bike />
      <Button className={'btn-regist'} content={'새 바이크 등록하기'} />
    </S.ListWrap>
  )
}

export default BikeList
