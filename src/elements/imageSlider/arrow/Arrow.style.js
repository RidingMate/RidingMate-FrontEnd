import styled from 'styled-components'

const Arrow = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background: none;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});

  border: none;

  transform: ${({ reverse }) => reverse && 'rotate(180deg) '};
`

export { Arrow }
