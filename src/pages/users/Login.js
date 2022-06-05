import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Btn from '../../components/users/Button'
import { SignInContainer } from './Login.style'
import Layout from '../../components/users/Layout'
import googleLogo from '../../assets/images/pages/users/google_logo.svg'
import kakaoLogo from '../../assets/images/pages/users/kakao_logo.svg'

const Wrap = styled.div`
  /* padding: 100% 0; */
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout title="LOGIN" smallTitle="로그인">
      <Wrap>
        <Btn
          page="로그인"
          type="구글"
          img={googleLogo}
          onClick={() => window.location.reload()}
        />
        <Btn
          page="로그인"
          type="카카오"
          img={kakaoLogo}
          onClick={() => window.location.reload()}
        />
        <SignInContainer>
          <span>아직 계정이 없으신가요? 계정을 만들어보세요!</span>
          <button onClick={() => navigate('/signup')}>회원가입</button>
        </SignInContainer>
      </Wrap>
    </Layout>
  )
}

export default Login
