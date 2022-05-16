import { Wrap, Title, NoBike } from './MyBike.style'
import Button from '../../elements/Button'
import BikeRegistForm from './RegistForm'

const MyBike = ({ myBikeList = [1, 2] }) => {
  return (
    <Wrap>
      <Title>
        <h2>MY BIKE</h2>
        <p>내 바이크</p>
      </Title>
      {myBikeList ? (
        <BikeRegistForm />
      ) : (
        <NoBike>
          <p>등록된 바이크가 없어요 :(</p>
          <Button content={'새 바이크 등록하기'} />
        </NoBike>
      )}
    </Wrap>
  )
}

export default MyBike
