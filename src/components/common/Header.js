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

  // width가 작아지면 가운데 정렬이 뭉개지는 현상이 발생해서
  // 일정 width 이하로 내려가면 반응형으로 숨기거나 navbar 작업
  // 추후 수정해야 할 것 같습니다!
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
          <div className="menu_item">
            <Link to="/mybike">MY BIKE</Link>
          </div>
          <div className="menu_item">MY PAGE</div>
        </div>
      </MainHeader>
    </Wrap>
  )
}

export default Header
