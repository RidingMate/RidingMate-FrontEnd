import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Btn from '../../components/users/Button'
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

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  span {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #333333;
  }

  button {
    width: 400px;
    height: 60px;

    background: #f1f1f1;
    border-radius: 15px;
    cursor: pointer;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #222222;

    margin-top: 15px;

    /* css 초기화 */
    border: none;
    box-shadow: none;
    padding: 0;
    overflow: visible;
  }
`

const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout title="LOGIN" smallTitle="로그인">
      <Wrap>
        <Btn type="구글" img={googleLogo} />
        <Btn type="카카오" img={kakaoLogo} />
        <SignInContainer>
          <span>아직 계정이 없으신가요? 계정을 만들어보세요!</span>
          <button onClick={() => navigate('/signin')}>회원가입</button>
        </SignInContainer>
      </Wrap>
    </Layout>
  )
}

export default Login
