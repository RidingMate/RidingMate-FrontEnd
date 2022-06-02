import styled from 'styled-components'
import bike_info_detail_oil from 'src/assets/images/pages/mybike/records/bike_info_detail_oil.svg'
import bike_info_header_edit_img from 'src/assets/images/pages/mybike/bike_info_header_edit_img.svg'
import bike_info_header_delete_img from 'src/assets/images/pages/mybike/bike_info_header_delete_img.svg'

const Card = styled.div`
  .card-wrap {
    padding: 0 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    font-size: 13px;
    b {
      font-size: 20px;
      margin-right: 5px;
    }

    & button {
      border: none;
      cursor: pointer;
    }
    .img {
      width: 18px;
      height: 20px;

      background: url(${bike_info_detail_oil}) no-repeat;
      background-size: contain;
      background-position: center;

      flex-grow: 0.3;
    }
    .amount {
      flex-grow: 1;
    }
    .price {
      flex-grow: 3;
    }
    .date {
      flex-grow: 3;
    }
    .edit-btn {
      width: 15px;
      height: 15px;
      background: url(${bike_info_header_edit_img}) no-repeat;
      background-size: contain;
      background-position: center;

      flex-grow: 0.3;
    }
    .delete-btn {
      width: 15px;
      height: 15px;
      background: url(${bike_info_header_delete_img}) no-repeat;
      background-size: contain;
      background-position: center;

      flex-grow: 0.3;
    }
  }
`

export { Card }
