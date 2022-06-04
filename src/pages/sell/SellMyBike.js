import React, { useState } from 'react'
import myBike from './myBike'
import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Procedure from '../../components/sell/Procedure'
import Card from '../../components/sell/Card'
import { useNavigate } from 'react-router-dom'
import {
  Title,
  MyBikeContainer,
  MyBikeItem,
  ButtonContainer,
  Button,
} from './SellMyBike.style'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
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
        <Procedure name="바이크 선택" type="my" />
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
            onClick={() => navigate('/sell/mybike/write')}
          >
            다음
          </Button>
        </ButtonContainer>
      </Wrap>
    </Layout>
  )
}

export default Sell
