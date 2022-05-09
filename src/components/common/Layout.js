import styled from 'styled-components'
import Header from './Header'

const Wrap = styled.header`
  width: 100%;
  /* border: 1px solid pink; */
`

const Layout = (props) => {
  const { children } = props

  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  )
}

export default Layout
