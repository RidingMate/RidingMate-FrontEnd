import styled from 'styled-components'

import main_mark from 'src/assets/images/pages/mybike/bike_main_mark_img.svg'
import header_edit_img from 'src/assets/images/pages/mybike/bike_info_header_edit_img.svg'
import header_delete_img from 'src/assets/images/pages/mybike/bike_info_header_delete_img.svg'

const Bike = styled.li`
  width: 100%;
  margin-bottom: 70px;
`

const BikeHeader = styled.div`
  height: 55px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #dddddd;
`

const BikeHeaderTitle = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 900;
  }
  p {
    font-size: 13px;
    font-weight: 100;
  }
`

const BikeHeaderBtns = styled.div`
  button {
    width: 20px;
    height: 20px;

    border: none;

    cursor: pointer;
    &.btn-edit {
      background: url(${header_edit_img});
    }
    &.btn-delete {
      margin-left: 20px;
      background: url(${header_delete_img});
    }
  }
`

const BikeContents = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`

const BikeImage = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;

  border-radius: 15px;

  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
`

const BikeMainMark = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;

  border-radius: 8px;

  display: grid;
  place-items: center;
  gap: 5px;

  background-color: #222222;
  color: #ffffff;

  .logo {
    width: 30px;
    height: 18px;
    background: url(${main_mark});
  }

  .word {
    font-size: 14px;
  }
`

const BikeInfos = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px 25px;
    margin-bottom: 20px;
    h3 {
      font-size: 15px;
    }
    b {
      font-size: 25px;
      align-self: flex-end;
      span {
        margin-left: 5px;

        font-size: 17px;
        color: #777777;
      }
    }
  }
`

const BikeInfosBtns = styled.div`
  display: flex;
  justify-content: space-between;
`

export {
  Bike,
  BikeHeader,
  BikeContents,
  BikeImage,
  BikeMainMark,
  BikeInfos,
  BikeHeaderTitle,
  BikeHeaderBtns,
  BikeInfosBtns,
}
