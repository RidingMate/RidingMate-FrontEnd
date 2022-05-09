import styled from 'styled-components'
import banner_img from '../assets/images/pages/main/main_banner.png'

const Wrap = styled.div`
  width: 100%;
`
const Banner = styled.div`
  width: 100%;
  position: relative;
`
const Image = styled.div`
  width: 100%;
  height: 910px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
`
const TextBox = styled.div`
  position: absolute;
  right: 135px;
  bottom: 100px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* text-align: right; */
  /* border: 1px solid red; */

  .title_market {
    color: #222;
    font-size: 30px;
  }

  .text_01 {
    font-size: 20px;
  }
  .text_02 {
    font-size: 30px;
  }
  .text_03 {
    font-size: 55px;
    font-weight: 700;
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
    margin-top: 30px;
    cursor: pointer;

    /* :hover {
      border: 3px solid #ffffff;
    } */
  }
`
const Market = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding-top: 110px;
  border: 1px solid red;
`
const TitleBox = styled.div`
  width: 100%;

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
const CardBox = styled.div`
  width: 100%;
  margin-top: 50px;
  border: 1px solid red;
`

const Main = () => {
  return (
    <Wrap>
      <Banner>
        <Image img={banner_img}></Image>
        <TextBox>
          <div className="text_01">빠르고 편리한</div>
          <div className="text_02">오토바이 관리 및 중고거래 서비스</div>
          <div className="text_03">RIDING MATE CREW</div>
          <div className="btn">지금 시작하기</div>
        </TextBox>
      </Banner>

      <Market>
        <TitleBox>
          <div className="title_market">MARKET</div>
          <div className="latest_content">최근 등록된 글</div>
        </TitleBox>
        <CardBox></CardBox>
      </Market>
    </Wrap>
  )
}

export default Main
