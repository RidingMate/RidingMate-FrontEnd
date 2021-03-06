import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 50px;
`
const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
`

const SmallTitle = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`

const Layout = (props) => {
  const { children, title, smallTitle } = props

  return (
    <Wrap>
      <Title>{title}</Title>
      <SmallTitle>{smallTitle}</SmallTitle>
      {children}
    </Wrap>
  )
}

export default Layout
