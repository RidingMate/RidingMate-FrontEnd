import * as S from './MyBike.style'
import Button from '../../elements/Button/Button'
import RegistForm from './RegistForm'

const MyBike = ({ myBikeList = [1, 2] }) => {
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
          <Button content={'새 바이크 등록하기'} />
        </S.NoBike>
      )}
    </S.Wrap>
  )
}

export default MyBike
