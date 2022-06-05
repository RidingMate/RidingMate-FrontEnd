import styled from 'styled-components'

const Wrap = styled.div``

const MyInput = styled.input`
  width: ${({ width }) => width || '400px'};
  height: 60px;
  padding-left: 25px;

  background: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 15px;

  flex: ${({ flex }) => flex || 'none'};
`

export { Wrap, MyInput }
