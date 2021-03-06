import styled from 'styled-components'
import Layout from '../../components/sell/Layout'
import Button from '../../components/sell/Button'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 230px;
`

const Sell = () => {
  return (
    <Layout title="SELL" smallTitle="판매하기">
      <Wrap>
        <Button title="내 바이크에서 선택하기" location="/sell/mybike" />
        <div style={{ marginBottom: '20px' }} />
        <Button title="새로운 판매글 등록하기" location="/sell/newbike/write" />
      </Wrap>
    </Layout>
  )
}

export default Sell
