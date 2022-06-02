import styled from 'styled-components'
import bike_info_header_edit_img from 'src/assets/images/pages/mybike/bike_info_header_edit_img.svg'
import bike_info_header_delete_img from 'src/assets/images/pages/mybike/bike_info_header_delete_img.svg'

const Card = styled.div`
  [class*='card-pos'] {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 25px 25px;
    .card-pos-top {
      a {
        text-decoration: none;
        color: #222222;
      }
      .service-name-center {
        .name {
          font-size: 15px;
          font-weight: 600;
        }
        .center {
          font-size: 13px;
          font-weight: 400;
        }
      }
      .service-edit-btns {
        display: flex;
        gap: 10px;
        & button {
          width: 15px;
          height: 15px;

          border: none;
          cursor: pointer;
        }
        .edit-btn {
          background: url(${bike_info_header_edit_img}) no-repeat;
          background-size: contain;
          background-position: center;
        }
        .delete-btn {
          background: url(${bike_info_header_delete_img}) no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
    }
    .card-pos-bottom {
      display: flex;
      align-items: flex-end;
      .service-charge {
        b {
          font-size: 23px;
          margin-right: 10px;
        }
      }
      .service-date {
        font-size: 11px;
      }
    }
  }
`

export { Card }
