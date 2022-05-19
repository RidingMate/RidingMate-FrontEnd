import styled from 'styled-components'

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
    font-sizie: 15px;
    text-align: center;
  }
`

const NoBike = styled.div`
  margin-top: 240px;
  p {
    text-align: center;
    margin-bottom: 15px;
  }
  button {
  }
`

export { Wrap, Title, NoBike }
