import styled from 'styled-components'

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 400px;
  height: 60px;
  padding: 17px 35px;

  background: #222222;
  border-radius: 15px;

  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;

    text-align: center;
  }

  :not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const Button = ({ img, type }) => {
  return (
    <Btn>
      <img src={img} alt={`${type} 로고`} />
      <span>{type} 계정으로 시작하기</span>
    </Btn>
  )
}

export default Button
