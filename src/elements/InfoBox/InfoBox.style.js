import styled, { css } from 'styled-components'

const InfoBox = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: 15px;
  border: 3px solid #dddddd;

  color: #333333;

  font-weight: 500;
  ${({ theme }) =>
    theme == 'solid' &&
    css`
      background-color: #f1f1f1;
      border: none;
    `};
`

export { InfoBox }
