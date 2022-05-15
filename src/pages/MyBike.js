import Button from '../elements/Button'
import styled from 'styled-components'
import BikeRegistForm from '../components/main/BikeRegistForm'

const Wrap = styled.div`
  * {
    margin: 0;
  }
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 40px;
    text-align: center;
  }
  p {
    font-sizie: 15px;
    text-align: center;
  }
`

const NoBike = styled.div`
  margin-top: 240px;
  p {
    margin-bottom: 15px;
  }
  button {
  }
`

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
          <Button />
        </NoBike>
      )}
    </Wrap>
  )
}

export default MyBike
