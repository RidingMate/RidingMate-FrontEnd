import styled from 'styled-components'

export const Card = styled.div`
  margin: 20px 0;
  padding: 0 18px;
  transition: all 0.4s ease-in-out;
  position: relative;
  display: inline-block;
  vertical-align: top;
  /* border: 1px solid red; */

  & div p {
    padding: 0;
    margin: 0;
  }

  & img video {
    border: 0;
    vertical-align: top;
    user-select: none !important;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }

  .product {
    overflow: hidden;
    position: relative;
    padding-top: 108%;
    border-radius: 14px;
    background-color: #f4f4f4;
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
    /* background-color: rgba(0, 0, 0, 0.4); */
  }
  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: -webkit-optimize-contrast;
  }

  .info_box {
    padding-top: 9px;
  }
  .desc {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }
  .bike {
    color: #222222;
    font-size: 0;
    line-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  .desc {
    font-size: 0;
    line-height: 0;
    padding-top: 10px;
  }
  .bike .name {
    display: inline-block;
    vertical-align: top;
    line-height: 24.7px;
    font-size: 21px;
    font-weight: 500;
  }
  .bike .model {
    display: inline-block;
    vertical-align: top;
    line-height: 20.4px;
    font-size: 17px;
    font-weight: 500;
  }
  .cc, .km {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-size: 0;
    line-height: 0;
  }
  .km .km_num, .km_km, .cc .cc_num, .cc_cc, .slash {
    line-height: 17px;
    color: #777777;
    font-size: 15px;
    font-weight: 500;
  }
  .price {
    padding-top: 9px;
  }
  .price .amount {
    font-size: 0;
    line-height: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
  }
  .price .num, .won {
    display: inline-block;
    vertical-align: top;
    line-height: 23px;
    font-size: 23px;
    font-weight: 700;
    /* letter-spacing: -0.04px; */
  }
`