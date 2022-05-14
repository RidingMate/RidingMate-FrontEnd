import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/market/Layout'
import Card from '../../components/market/Card'
import SearchForm from '../../components/market/SearchForm'
import LeftArrow from './leftArrowIcon.svg'
import RightArrow from './rightArrowIcon.svg'
// import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 22px;
`

const NoticeContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  color: #333333;

  padding-top: 21px;

  margin-top: 34px;
  margin-bottom: 41px;

  img {
    cursor: pointer;
  }

  div {
    cursor: pointer;
  }
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

// const ButtonContainer = styled.div`
//   margin-top: 100px;
// `

// const Button = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   width: 250px;
//   height: 70px;
//   background: ${(props) => props.bColor};
//   border-radius: 15px;

//   font-family: 'Apple SD Gothic Neo';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 17px;
//   color: #ffffff;

//   cursor: pointer;
// `

const myBike = [
  {
    key: 'sss1',
    title: '판매글 제목입니다. 1',
    cc: '000cc',
    km: '00,000km',
    subTitle: '혼다 Super Cub',
    img: 'https://velog.velcdn.com/images%2Freemrev21%2Fpost%2F3a760ad5-c0e4-457e-8f15-5c7d9f986afc%2F72df9a1e-1b6c-4fff-aed5-0b21a9b685f0.jpg',
  },
  {
    key: 'sss2',
    title: '판매글 제목입니다. 2',
    cc: '000cc',
    km: '00,000km',
    subTitle: '혼다 Super Cub',
    img: 'https://velog.velcdn.com/images%2Freemrev21%2Fpost%2F3a760ad5-c0e4-457e-8f15-5c7d9f986afc%2F72df9a1e-1b6c-4fff-aed5-0b21a9b685f0.jpg',
  },
]

const Market = () => {
  const [selected, setSelected] = useState([])
  // const navigate = useNavigate()

  const selectMarketBike = (title) => {
    setSelected(title)
  }

  return (
    <Layout title="Market" smallTitle="바이크 중고마켓">
      <Wrap>
        <NoticeContainer>
          <img src={LeftArrow} alt="왼쪽 버튼" />
          <div>
            공지사항내용 클릭하면 들어가져야하는데... 이건 또 언제 만들어...
          </div>
          <img src={RightArrow} alt="오른쪽 버튼" />
        </NoticeContainer>
        <SearchForm />
        <MyBikeArea>
          {myBike.map((item) => (
            <MyBikeContainer
              key={item.key}
              onClick={() => selectMarketBike(item.title)}
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
      </Wrap>
    </Layout>
  )
}

export default Market
