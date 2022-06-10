import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/images/pages/main/main_logo.svg'

const Wrap = styled.header`
  width: 100%;

  .menu_item {
    cursor: pointer;
    a {
      color: #333333;
      text-decoration: none;
    }
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

  // width가 작아지면 가운데 정렬이 뭉개지는 현상이 발생해서
  // 일정 width 이하로 내려가면 반응형으로 숨기거나 navbar 작업
  // 추후 수정해야 할 것 같습니다!
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
        <div className="menu_item">
          <Link to="/login">LOGIN</Link>
        </div>
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
          <div className="menu_item">
            <Link to="/sell">SELL</Link>
          </div>
          <div className="menu_item">
            <Link to="/market">MARKET</Link>
          </div>
          <div className="menu_item">
            <Link to="/mybike">MY BIKE</Link>
          </div>
          <div className="menu_item">
            <Link to="/mypage">MY PAGE</Link>
          </div>
        </div>
      </MainHeader>
    </Wrap>
  )
}

export default Header
