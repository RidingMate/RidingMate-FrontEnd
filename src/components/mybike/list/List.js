import { useNavigate } from 'react-router-dom'
import * as S from './List.style'

import Button from 'src/elements/button'
import Bike from '../bike'

import bike_main_mark_img from 'src/assets/images/pages/mybike/bike_main_mark_img.svg'

const List = () => {
  const navigate = useNavigate()

  return (
    <S.ListWrap>
      <Bike />
      <Bike />
      <Button
        className={'btn-regist'}
        content={'새 바이크 등록하기'}
        onClick={() => navigate('/mybike/regist')}
      >
        <img src={bike_main_mark_img} alt="" />
      </Button>
    </S.ListWrap>
  )
}

export default List
