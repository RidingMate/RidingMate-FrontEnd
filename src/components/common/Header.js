import styled from 'styled-components'
import LOGO from '../../assets/images/pages/main/main_logo.svg'

const Wrap = styled.header`
  width: 100%;

  .menu_item {
    cursor: pointer;
  }
`
const SubHeader = styled.div`
  width: 100%;
  height: 50px;
  color: #777777;
  font-size: 17px;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 70px;
  padding-right: 76px;
  border-bottom: 1px solid #dddddd;
`
const MainHeader = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 76px;

  .menu_box {
    color: #333333;
    font-size: 22px;
    font-weight: 700;
    display: flex;
    gap: 90px;
  }
`

const Header = () => {
  return (
    <Wrap>
      <SubHeader>
        <div className="menu_item">HELP</div>
        <div className="menu_item">LOGIN</div>
      </SubHeader>
      <MainHeader>
        <img
          className="main_logo"
          alt="main_logo"
          src={LOGO}
          width={100}
          height={65}
        />
        <div className="menu_box">
          <div className="menu_item">SELL</div>
          <div className="menu_item">MARKET</div>
          <div className="menu_item">MY BIKE</div>
          <div className="menu_item">MY PAGE</div>
        </div>
      </MainHeader>
    </Wrap>
  )
}

export default Header
