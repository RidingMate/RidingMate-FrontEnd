import * as S from './style/MainStyle'
import Card from '../components/main/Card'
import banner_img from '../assets/images/pages/main/main_banner.png'
import banner_footer_img from '../assets/images/pages/main/main_banner_footer.png'

const Main = () => {
  return (
    <S.Wrap>
      <S.Banner>
        <S.Image img={banner_img} height={'700px'}></S.Image>
        <S.TextBox bottom={'90px'}>
          <div className="text_01">빠르고 편리한</div>
          <div className="text_02">오토바이 관리 및 중고거래 플랫폼</div>
          <div className="text_03">RIDING MATE CREW</div>
          <div className="btn">지금 시작하기</div>
        </S.TextBox>
      </S.Banner>

      <S.Market>
        <S.TitleBox>
          <div className="title_market">MARKET</div>
          <div className="latest_content">최근 등록된 글</div>
        </S.TitleBox>
        <S.CardBoxWrap>
          <S.CardBox>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </S.CardBox>
        </S.CardBoxWrap>
        <S.More>더 보기</S.More>
      </S.Market>
      <S.Banner>
        <S.Image img={banner_footer_img} height={'600px'}></S.Image>
        <S.TextBox top={'64px'}>
          <div className="text_04_wrap">
            <div className="text_03">RIDING MATE CREW</div>
            <span className="text_04_1">와 함께</span>
          </div>
          <div className="text_02">
            쉽게 바이크를 관리하고 정보를 공유하세요.
          </div>
          <div className="btn">주유 / 정비기록 추가하기</div>
        </S.TextBox>
      </S.Banner>
      <S.Footer>
        <div className="info_box">
          <div className="info_item">
            <div className="title">이용안내</div>
            <div className="item">서비스 소개</div>
            <div className="item">가이드라인</div>
          </div>
          <div className="info_item">
            <div className="title">고객지원</div>
            <div className="item">공지사항</div>
          </div>
          <div className="info_item">
            <div className="title">이용약관</div>
          </div>
          <div className="info_item">
            <div className="title">개인정보 처리방침</div>
          </div>
        </div>
        <div className="name_c">Riding Mate Crew c</div>
      </S.Footer>
    </S.Wrap>
  )
}

export default Main
