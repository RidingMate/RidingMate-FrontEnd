import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-named-as-default
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset};
    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }
`

export default GlobalStyle
