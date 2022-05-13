import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Card from '../../components/sell/Card'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22px;
`

const Title = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  margin-top: 45px;
  margin-bottom: 49px;
`

const SellProcedure = styled.div`
  width: 248px;
  height: 17px;
  background-color: black;
`

const MyBikeArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const myBike = [
  {
    key: 'sss1',
    title: '내 바이크1',
    subTitle: '혼다 Super Cub',
    img: 'https://velog.velcdn.com/images%2Freemrev21%2Fpost%2F3a760ad5-c0e4-457e-8f15-5c7d9f986afc%2F72df9a1e-1b6c-4fff-aed5-0b21a9b685f0.jpg',
  },
  {
    key: 'sss2',
    title: '내 바이크2',
    subTitle: '혼다 Super Cub',
    img: 'https://velog.velcdn.com/images%2Freemrev21%2Fpost%2F3a760ad5-c0e4-457e-8f15-5c7d9f986afc%2F72df9a1e-1b6c-4fff-aed5-0b21a9b685f0.jpg',
  },
]

const Sell = () => {
  return (
    <Layout title="SELL" smallTitle="판매하기">
      <Wrap>
        <SellProcedure />
        <Title>판매할 바이크를 선택하세요.</Title>
        <MyBikeArea>
          {myBike.map((item) => (
            <Card
              key={item.key}
              title={item.title}
              subTitle={item.subTitle}
              img={item.img}
            />
          ))}
        </MyBikeArea>
      </Wrap>
    </Layout>
  )
}

export default Sell
