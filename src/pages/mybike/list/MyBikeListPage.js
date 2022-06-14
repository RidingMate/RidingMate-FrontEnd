import { useNavigate } from 'react-router-dom'
import * as S from './MyBikeListPage.style'

import Button from 'src/elements/button/Button'
import BikeList from 'src/components/mybike/list'
import PageHeader from 'src/elements/pageHeader'

const MyBikeListPage = ({ myBikeList = [1, 2] }) => {
  const navigate = useNavigate()

  return (
    <S.Wrap>
      <S.Title>
        <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      </S.Title>
      {myBikeList ? (
        <BikeList />
      ) : (
        <S.NoBikeWrap>
          <p>등록된 바이크가 없어요 :(</p>
          <Button
            content={'새 바이크 등록하기'}
            onClick={() => navigate('/mybike/regist')}
          />
        </S.NoBikeWrap>
      )}
    </S.Wrap>
  )
}

export default MyBikeListPage
