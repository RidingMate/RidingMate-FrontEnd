import { useNavigate } from 'react-router-dom'
import * as S from './MyBikeListPage.style'

import Button from 'src/elements/button/Button'
import BikeList from 'src/components/mybike/list'
import PageHeader from 'src/elements/pageHeader'
import { getBikeList } from 'src/api/mybike/list/GetListApi'

const MyBikeListPage = ({ myBikeList = [1, 2] }) => {
  const navigate = useNavigate()
  // 아래 custom해서 만든 getBikeList를
  // react-query로 이용하면 될 것 같습니다.
  const response = getBikeList() // : Promise<AxiosResponse>
  console.log(response)
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
