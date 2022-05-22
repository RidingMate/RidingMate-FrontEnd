import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Procedure from '../../components/sell/Procedure'
import Card from '../../components/sell/Card'
import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  margin-top: 45px;
  margin-bottom: 49px;
`

const MyBikeArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MyBikeContainer = styled.div`
  :not(:last-of-type) {
    margin-right: 80px;
  }
`

const ButtonContainer = styled.div`
  margin-top: 100px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 70px;
  background: ${(props) => props.bColor};
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;

  cursor: pointer;
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
  const [selected, setSelected] = useState([])
  const navigate = useNavigate()

  const selectSellBike = (title) => {
    setSelected(title)
  }

  return (
    <Layout title="SELL" smallTitle="판매하기">
      <Wrap>
        <Procedure name="바이크 선택" />

        <Title>판매할 바이크를 선택하세요.</Title>
        <MyBikeArea>
          {myBike.map((item) => (
            <MyBikeContainer
              key={item.key}
              onClick={() => selectSellBike(item.title)}
            >
              <Card
                title={item.title}
                subTitle={item.subTitle}
                img={item.img}
                selected={selected}
              />
            </MyBikeContainer>
          ))}
        </MyBikeArea>
        <ButtonContainer>
          <Button
            bColor={selected.length !== 0 ? '#222222' : '#dddddd'}
            onClick={() => navigate('/sell/my-bike/write')}
          >
            다음
          </Button>
        </ButtonContainer>
      </Wrap>
    </Layout>
  )
}

export default Sell
