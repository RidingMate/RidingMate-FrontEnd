import styled from 'styled-components'

const Menus = styled.div`
  flex: 1;
  height: 60px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: #fff;
  color: #999;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  &.isActive {
    background-color: #222;
    color: #ffffff;
  }
`

const TabMenu = ({ onClick, label, count, isActive }) => {
  return (
    <Menus onClick={onClick} className={isActive ? 'isActive' : ''}>
      {label} {count}
    </Menus>
  )
}

export default TabMenu
