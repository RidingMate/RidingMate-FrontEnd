import styled from 'styled-components'
import bike_info_detail_refresh_button from 'src/assets/images/pages/mybike/records/bike_info_detail_refresh_button.svg'
import bike_info_detail_add_button from 'src/assets/images/pages/mybike/records/bike_info_detail_add_button.svg'

const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
  h2 {
    padding-top: 20px;

    font-size: 20px;
    font-weight: 800;
  }
`

const Header = styled.div`
  margin-top: 70px;
  padding-bottom: 10px;

  border-bottom: 1px solid #dddddd;
  h1 {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    font-size: 13px;
    font-weight: 400;
  }
`

const Info = styled.div`
  border-bottom: 1px solid #dddddd;
  .info-box-wrap {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    margin-bottom: 20px;
    .info-box {
      padding: 25px 30px;
      margin-top: 10px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 15px;
        font-weight: 700;
      }
      p {
        align-self: flex-end;

        font-size: 17px;
        b {
          font-size: 30px;
          margin-right: 10px;
        }
      }
    }
  }
`

const Record = styled.div`
  border-bottom: 1px solid #dddddd;
  .record-head {
    display: flex;
    justify-content: space-between;
    select {
      margin-top: 20px;
      margin-bottom: 55px;
    }
  }
  .record-announcement {
    margin-bottom: 37px;
    text-align: center;
    p {
      font-size: 17px;
      b {
        font-size: 30px;
      }
    }
  }
`

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .detail-head {
    width: 100%;
    margin-bottom: 30px;

    display: flex;
    justify-content: space-between;
    .detail-head-btns {
      margin-top: 20px;
      button {
        width: 20px;
        height: 20px;

        border: none;
        background: none;
        &.refresh {
          background: url(${bike_info_detail_refresh_button}) no-repeat;

          cursor: pointer;
        }
        &.add {
          margin-left: 20px;

          background: url(${bike_info_detail_add_button}) no-repeat;

          cursor: pointer;
        }
      }
    }
  }
  .detail-cards-wrap {
    width: 100%;
    .refueling-cards {
      margin-bottom: 109px;
      & > :not(:last-child) {
        margin-bottom: 10px;
      }
    }
    .maintanance-cards {
      margin-bottom: 213px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(440px, 100%), 1fr));
      gap: 20px 20px;
    }
  }
  .records-add {
    display: flex;
    flex-direction: column;
    align-items: center;
    .notice {
      margin-bottom: 15px;
      font-size: 15px;
      font-weight: 400;
    }
    button {
      img {
        margin-left: 7px;
      }
    }
  }
`

export { Wrap, Header, Info, Record, Detail }
