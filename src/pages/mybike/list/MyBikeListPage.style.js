import styled from 'styled-components'
import main_mark from 'src/assets/images/pages/mybike/bike_main_mark_img.svg'

const Wrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
  }
  p {
    font-size: 15px;
    text-align: center;
  }
`

const NoBikeWrap = styled.div`
  margin-top: 240px;
  p {
    text-align: center;
    margin-bottom: 15px;
  }
  button {
    ::after {
      content: '';
      width: 35px;
      height: 21px;
      margin-left: 5px;

      background: url(${main_mark}) no-repeat;
    }
  }
`

export { Wrap, Title, NoBikeWrap }
