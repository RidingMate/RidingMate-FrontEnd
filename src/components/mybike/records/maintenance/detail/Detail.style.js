import styled from 'styled-components'
import bike_info_header_edit_img from 'src/assets/images/pages/mybike/bike_info_header_edit_img.svg'
import bike_info_header_delete_img from 'src/assets/images/pages/mybike/bike_info_header_delete_img.svg'

const Detail = styled.div`
  margin-top: 70px;
  margin-bottom: 119px;

  width: 100%;
  max-width: 900px;
`

const Header = styled.div`
  font-weight: 600;
  & > * {
    border-bottom: 1px solid #dddddd;
    padding-bottom: 15px;
  }
  .title {
    margin-bottom: 35px;
    font-size: 20px;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;

    font-size: 18px;
    .word {
    }
    .btn-group {
      & > * {
        width: 20px;
        height: 20px;
        border: none;

        cursor: pointer;
      }
      .edit {
        background: url(${bike_info_header_edit_img}) no-repeat;
        background-size: contain;
        background-position: center;
      }
      .delete {
        background: url(${bike_info_header_delete_img}) no-repeat;
        background-size: contain;
        background-position: center;

        margin-left: 20px;
      }
    }
  }
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  & > * {
    flex-grow: 1;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  .scroll-photos-frame {
  }
  .controller {
  }
`

const Right = styled.div`
  .histories {
    .history {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      min-width: 470px;

      margin-bottom: 20px;
      padding: 20px 25px;
      h3 {
        align-self: flex-start;

        font-size: 15px;
        font-weight: 600;
      }
      p {
        align-self: flex-end;

        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .details {
    width: 100%;
    height: 135px;
    margin-bottom: 20px;
    padding: 25px;
    h3 {
    }
  }
  .total-charge {
    .charge-box {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 20px 25px;
      h3 {
        align-self: flex-start;

        font-size: 15px;
        font-weight: 800;
      }
      p {
        align-self: flex-end;

        font-size: 15px;
        font-weight: 600;
        b {
          font-size: 25px;
        }
      }
    }
  }
`

export { Detail, Header, Wrap, Top, Left, Right }
