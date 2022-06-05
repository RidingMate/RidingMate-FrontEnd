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

const SignUp = () => {
  return (
    <Layout title="Sign Up" smallTitle="회원가입">
      <Wrap>
        <Btn
          page="회원가입"
          type="구글"
          img={googleLogo}
          onClick={() => window.location.reload()}
        />
        <Btn
          page="회원가입"
          type="카카오"
          img={kakaoLogo}
          onClick={() => window.location.reload()}
        />
      </Wrap>
    </Layout>
  )
}

export default SignUp
