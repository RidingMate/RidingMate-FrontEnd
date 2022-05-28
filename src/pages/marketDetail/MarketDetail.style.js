import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding: 52px 40px 80px;
  max-width: 1200px;
  /* border: 1px solid red; */

  .blind {
    overflow: hidden !important;
    position: absolute !important;
    clip: rect(0, 0, 0, 0) !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
  }

  .column_bind {
    position: relative;
    height: 980px;
    /* border: 1px solid red; */
  }
  .column {
    width: 50%;

    :first-child {
      float: left;
      padding-right: 3.334%;
    }
    :nth-child(2) {
      position: relative;
      float: right;
      padding-left: 3.334%;
    }
  }
  .is_fixed {
    .column_box {
      position: fixed;
      top: 140px;
    }
  }
  .is_absolute {
    .column_box {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .spread {
    position: static;
    display: block;
    height: 550px;
    background-color: rgba(0, 0, 0, 0);
  }
  .img_count {
    margin: 20px auto 0;
    padding: 3px 10px;
    font-size: 13px;
    line-height: 15.6px;
    width: fit-content;
    border-radius: 30px;
    border: 1px solid #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .banner_slide {
    overflow: hidden;
    position: relative;
    width: 550px;
  }
  .banner_slide.detail_slide .slick-slide {
    float: left;
  }
  & button {
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    background-color: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    display: block;
  }
  .detail_slide .slick-arrow.slick-prev {
    left: 0;
    z-index: 1;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0NCA0NCI+PHBhdGggc3Ryb2tlPSIjRDNEM0QzIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI3LjUgMzNsLTExLTExIDExLTExIi8+PC9zdmc+)
      no-repeat;
  }
  .detail_slide .slick-arrow.slick-next {
    right: 0;
    z-index: 1;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0NCA0NCI+PHBhdGggc3Ryb2tlPSIjRDNEM0QzIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjUgMTFsMTEgMTEtMTEgMTEiLz48L3N2Zz4=)
      no-repeat;
  }
  .banner_slide.detail_slide .slick-arrow {
    position: absolute;
    bottom: 50%;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    width: 44px;
    height: 44px;
    font-size: 0;
    color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
  .slick-slide {
    outline: none;
    width: 100%;
    position: relative;
    left: 0px;
    opacity: 1;
    transition: opacity 500ms ease 0s, visibility 500ms ease 0s;
  }

  .slide_content {
    vertical-align: top;
  }
  .slide_item {
    position: relative;
    background-color: rgb(244, 244, 244);
  }
  .product {
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    border-radius: 0;
    background-color: rgb(244, 244, 244);
  }
  .picture {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .product_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    /* width: 81.5%; */
    height: auto;
  }
  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: -webkit-optimize-contrast;
  }
  &img {
    border: 0;
    vertical-align: top;
  }
  .detail_main_title {
    position: relative;
  }
  .detail_main_title {
    .main_title {
      color: #000000;
      font-size: 18px;
      line-height: 20.4px;
      padding-top: 1px;
      margin-bottom: 10px;
      letter-spacing: -0.27px;
      font-weight: 700;
    }
    .sub_title {
      font-size: 15px;
      font-weight: 500;
      line-height: 18px;
      padding: 10px 0;
      border-bottom: 1px solid #ebebeb;
    }
    .deal_info_content {
      padding: 20px 8px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .deal_info_content_inner {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;

      .left {
        color: #333333;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.8px;
        width: 50px;
      }
      .right {
        color: #222222;
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
      }
    }
    .bike_info_content {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px 0;

      .bike_info_item_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        .top_info {
          height: 100px;
        }
      }

      .bike_info_item {
        width: 100%;
        height: 90px;
        border-radius: 15px;
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;

        .title {
          color: #333333;
          font-size: 15px;
          font-weight: 600;
          line-height: 18px;
        }
        .info {
          color: #222222;
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          direction: rtl;
        }
      }
    }
    .price_info {
      margin-top: 10px;
      direction: rtl;
      .price {
        color: #222222;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
      }
      .won {
        color: #333333;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
        padding: 0 22px 0 10px;
      }
    }
  }
  & a {
    text-decoration: none;
  }
`
export const Review = styled.div`
  margin: 0 auto;
  padding: 0 40px 60px;
  max-width: 1200px;

  .review_title {
    display: flex;
    padding: 20px 0 18px;
    -webkit-box-align: center;
    align-items: center;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    gap: 6px;
  }
  .review_content {
    padding-top: 20px;
    .review_write_wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      .profile_main {
        width: 45px;
        height: 45px;
        border-radius: 30px;
        background-color: gray;
      }
      .profile_box {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        border: 1px solid #dddddd;

        .write_input {
          width: 100%;
          height: 58px;
          border: none;
          border-radius: 15px;
          padding: 0 20px;
          :focus {
            outline: none;
          }
        }
        .write_btn {
          width: 70px;
          height: 58px;
          border: none;
          border-radius: 15px;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
  .review_item_wrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    margin-top: 40px;

    .profile_main {
      width: 45px;
      height: 45px;
      border-radius: 30px;
      background-color: gray;
    }
    .review_item_box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .nickname {
        color: #222222;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        padding-bottom: 5px;
      }
      .content {
        color: #222222;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        padding-bottom: 10px;
      }
      .option_box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-bottom: 10px;
      }
      .option {
        color: #999999;
        font-size: 11px;
        font-weight: 700;
        line-height: 13.2px;
      }
      .data {
        font-weight: 600;
      }
      .re_review,
      .notify {
        cursor: pointer;
      }
    }
  }
`
