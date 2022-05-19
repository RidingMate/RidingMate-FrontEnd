import styled from 'styled-components'

const Wrap = styled.div``

const Btn = styled.button`
  width: ${({ width }) => width};
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 15px;

  font-size: 17px;
  font-weight: 900;

  cursor: pointer;

  background-color: ${({ theme }) => {
    if (theme === 'button-grey') return '#F1F1F1'
    else return '#222222'
  }};
  color: ${({ theme }) => {
    if (theme === 'button-grey') return '#333333'
    else return '#FFFFFF'
  }};

  & :nth-child(1) {
    flex: ${({ theme }) => theme === 'button-login' && '1'};
    display: grid;
    place-items: center;
  }
  & :nth-child(2) {
    flex: ${({ theme }) => theme === 'button-login' && '4'};
  }
`

export { Wrap, Btn }
