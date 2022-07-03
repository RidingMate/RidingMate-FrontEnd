import React, { useState } from 'react'
import TabMenu from 'src/components/mypage/TabMenu'
import UserCard from 'src/components/mypage/UserCard'
import styled from 'styled-components'
import Layout from '../../components/mypage/Layout'
import userInfo from './userInfo'
import Card from 'src/components/market/Card'
import myBike from './myBike'

const Tabs = [
  { id: 'sell', label: '내 판매글', count: '0' },
  { id: 'write', label: '댓글 단 글', count: '1' },
  { id: 'save', label: '저장한 글', count: '2' },
]

const Wrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
`

const TabWrap = styled.div`
  width: 100%;
  display: flex;
`

const Content = styled.div`
  width: 100%;
  border-top: 2px solid #222;
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 20px;

  .item {
    width: 210px;
    height: 100%;
  }
`

const MyPage = () => {
  const [tab, setTab] = useState('sell')

  return (
    <Layout title="MY PAGE" smallTitle="마이페이지">
      {userInfo ? (
        <Wrap>
          <UserCard
            userName={userInfo.userName}
            img={userInfo.img}
            login={userInfo.login}
            phoneNumber={userInfo.phoneNumber}
            question={userInfo.question}
            answer={userInfo.answer}
          />
          <div style={{ marginTop: '60px' }} />
          <TabWrap>
            {Tabs.map((item) => (
              <TabMenu
                key={item.id}
                onClick={() => setTab(item.id)}
                label={item.label}
                count={item.count}
                isActive={tab === item.id && true}
              />
            ))}
          </TabWrap>
          <Content>
            {myBike.map((item, index) => (
              <div className="item" key={index}>
                <Card
                  img={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  cc={item.cc}
                  km={item.km}
                  price={item.price}
                />
              </div>
            ))}
          </Content>
        </Wrap>
      ) : (
        <>로그인 해주세요</>
      )}
    </Layout>
  )
}

export default MyPage
