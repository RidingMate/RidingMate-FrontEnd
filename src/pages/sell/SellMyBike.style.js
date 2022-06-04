import styled from 'styled-components'

const Title = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #333333;

  margin-top: 50px;
  margin-bottom: 55px;
`

const MyBikeContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  row-gap: 93.3px;
  column-gap: 60px;
`

const MyBikeItem = styled.div`
  /* :not(:last-of-type) {
    margin-right: 80px;
  } */
`

const ButtonContainer = styled.div`
  margin-top: 100px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 60px;
  background: ${(props) => props.bColor};
  border-radius: 15px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;

  cursor: pointer;
`
export { Title, MyBikeContainer, MyBikeItem, ButtonContainer, Button }
