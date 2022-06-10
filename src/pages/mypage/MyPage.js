// import React, { useState } from 'react'
import UserCard from 'src/components/mypage/UserCard'
import styled from 'styled-components'
import Layout from '../../components/mypage/Layout'
// import { useNavigate } from 'react-router-dom'
// import {
//   NoticeContainer,
//   SearchContainer,
//   TagContainer,
//   TagItem,
//   ContentContainer,
//   FilterContainer,
//   Divider,
//   InfoWrap,
//   Select,
//   InputText,
//   ButtonContainer,
//   Button,
// } from './MyPage.style'
import userInfo from './userInfo'

const Wrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
`

const MyPage = () => {
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
        </Wrap>
      ) : (
        <>로그인 해주세요</>
      )}
    </Layout>
  )
}

export default MyPage
