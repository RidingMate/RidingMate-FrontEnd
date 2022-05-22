import React, { useState } from 'react'
import myBike from './myBike'
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
  padding-bottom: 120px;
`

const Title = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #333333;

  margin-top: 50px;
  margin-bottom: 55px;
`

const MyBikeContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: ${(props) => props.gridColumns};
  row-gap: 93.3px;
  column-gap: 60px;
`

const MyBikeItem = styled.div`
  /* :not(:last-of-type) {
    margin-right: 80px;
  } */
`

const ButtonContainer = styled.div`
  margin-top: 100px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 60px;
  background: ${(props) => props.bColor};
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;

  cursor: pointer;
`

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
        <MyBikeContainer
          gridColumns={
            myBike.length < 4 ? '1fr '.repeat(myBike.length) : '1fr 1fr 1fr 1fr'
          }
        >
          {myBike.map((item) => (
            <MyBikeItem
              key={item.key}
              onClick={() => selectSellBike(item.title)}
            >
              <Card
                title={item.title}
                subTitle={item.subTitle}
                img={item.img}
                selected={selected}
              />
            </MyBikeItem>
          ))}
        </MyBikeContainer>
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
