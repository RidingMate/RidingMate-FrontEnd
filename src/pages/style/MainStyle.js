import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;

  & div p {
    padding: 0;
    margin: 0;
  }
`
export const Banner = styled.div`
  width: 100%;
  position: relative;
`
export const Image = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  /* height: 910px; */
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
`
export const TextBox = styled.div`
  position: absolute;
  right: 135px;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  /* bottom: 100px; */
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .title_market {
    color: #222;
    font-size: 30px;
  }

  .text_01 {
    font-size: 20px;
    line-height: 20px;
  }
  .text_02 {
    font-size: 30px;
    line-height: 27px;
    margin-top: 10px;
  }
  .text_03 {
    font-size: 55px;
    font-weight: 700;
    line-height: 48px;
    margin-top: 20px;
  }
  .text_04_wrap {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .text_04 {
    font-size: 55px;
    font-weight: 700;
    line-height: 40px;
  }
  .text_04_1 {
    font-size: 30px;
    line-height: 27px;
  }
  .text_05 {
    font-size: 30px;
    line-height: 27px;
    margin-top: 21px;
  }
  .btn {
    width: 250px;
    height: 70px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #ffffff;
    margin-top: 50px;
    cursor: pointer;

    /* :hover {
      border: 3px solid #ffffff;
    } */
  }
`
export const Market = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 110px;
  /* border: 1px solid red; */
`
export const TitleBox = styled.div`
  width: 100%;
  padding: 0 46px;
  margin: 0 auto;

  .title_market {
    color: #222222;
    font-size: 30px;
  }
  .latest_content {
    color: #777777;
    font-size: 18px;
    font-weight: 600;
  }
`
export const CardBoxWrap = styled.div`
  padding: 0 28px;
  margin: 30px auto 0;
`
export const CardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, 306px));
  grid-template-rows: repeat(2, minmax(auto, 490px));
  overflow: hidden;
`
export const More = styled.div`
  width: 180px;
  height: 60px;
  color: #777777;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  border-radius: 15px;
  border: 2px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 70px;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px 0;

  .info_box {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 120px;
    border-bottom: 1px solid #dddddd;
  }
  .info_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 17px;
      margin-bottom: 16px;
    }
    .item {
      font-size: 13px;
      font-weight: 400;
      line-height: 14px;
      margin-bottom: 8px;
    }
  }
  .name_c {
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    align-self: flex-end;
    margin: 18px 0 26px;
    /* margin: 18px 0 26px auto; */
  }
`