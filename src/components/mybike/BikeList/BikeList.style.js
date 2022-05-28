import styled from 'styled-components'
import bike_main_mark_img from 'src/assets/images/pages/mybike/bike_main_mark_img.svg'

const ListWrap = styled.ul`
  width: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 70px;
  margin-bottom: 162px;
  .btn-regist {
    margin-top: 35px;
    ::after {
      content: '';
      width: 35px;
      height: 21px;
      margin-left: 5px;

      background: url(${bike_main_mark_img}) no-repeat;
    }
  }
`
export { ListWrap }
