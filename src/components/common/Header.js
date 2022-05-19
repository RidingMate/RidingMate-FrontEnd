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
  height: 30px;
  color: #777777;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding-right: 60px;
  border-bottom: 1px solid #dddddd;
`
const MainHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  .menu_box {
    color: #333333;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    display: flex;
    gap: 60px;
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
          width={60}
          height={39}
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
