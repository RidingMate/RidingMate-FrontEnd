import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70px;
  background: #222222;
  border-radius: 15px;
  cursor: pointer;

  .title {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
  }
`
const Button = (props) => {
  const { title, location } = props
  const navigate = useNavigate()

  return (
    <Wrap onClick={() => navigate(location)}>
      <div className="title">{title}</div>
    </Wrap>
  )
}

export default Button
