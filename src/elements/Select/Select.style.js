import styled from 'styled-components'
import btn_dropdwon_img from './btn_dropdwon_img.svg'

const Select = styled.select`
  width: ${({ width }) => width || '400px'};
  height: 60px;
  padding: 0 23px;

  appearance: none;

  background: url(${btn_dropdwon_img}) no-repeat 95% 50%;
  background-color: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  box-sizing: border-box;
`

export { Select }
