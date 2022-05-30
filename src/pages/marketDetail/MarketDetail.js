import { useState, useEffect, useRef } from 'react'
import * as S from './MarketDetail.style'
import test_bike_img_2 from '../../components/main/test_bike_2.png'

const MarketDetail = () => {
  const standardRef = useRef(null)
  const [position, setPosition] = useState(false)
  const documentRef = useRef(document)

  const throttle = function (callback, waitTime) {
    let timerId = null
    return (e) => {
      if (timerId) return
      timerId = setTimeout(() => {
        callback.call(this, e)
        timerId = null
      }, waitTime)
    }
  }

  const handleScroll = () => {
    const { pageYOffset } = window
    const position = pageYOffset >= standardRef.current + 12
    setPosition(position)
  }

  const throttleScroll = throttle(handleScroll, 25)

  useEffect(() => {
    const target_container = document.querySelector('.column_bind')
    const target_leftImgBox = document.querySelector('.column_box')
    let targetHeight = target_container.offsetHeight // offsetHeight: content(height) + padding(top, bottom) + border(top, bottom)
    let targetHeight02 = target_leftImgBox.offsetHeight
    standardRef.current = targetHeight - targetHeight02
  }, [])

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll)
    return () => {
      documentRef.current.removeEventListener('scroll', throttleScroll)
    }
  })

  return (
    <S.Container className="container detail lg">
      <S.Content className="content">
        <h2 className="blind">상품 상세</h2>
        <div className="column_bind">
          <div className={position ? 'column is_absolute' : 'column is_fixed'}>
            <div className="spread"></div>
            <div className="column_box">
              <div className="detail_banner_area lg">
                <div className="banner_slide detail_slide slick-slider slick-initialized">
                  <button
                    type="button"
                    className="slick-arrow slick-prev slick-disabled"
                  ></button>
                  <div className="slick-list">
                    <div className="slick-track">
                      <div className="slick-slide slick-active slick-current">
                        <div>
                          <div className="slide_content">
                            <div className="slide_item">
                              <div className="item_inner">
                                <div className="product">
                                  <div className="picture product_img">
                                    {/* <source type="image/webp" srcset={test_bike_img_2}></source> */}
                                    <img
                                      className="image"
                                      alt="test_img"
                                      src={test_bike_img_2}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="slick-arrow slick-next"
                  ></button>
                </div>
              </div>
              <div className="img_count">
                <span>1</span>
                <span>/</span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="column_box_02">
              <div className="column_top">
                <div className="detail_main_title lg">
                  <div className="main_title">판매글 제목입니다</div>
                  <div className="deal_info sub_title">거래 정보</div>
                  <div className="deal_info_content">
                    <div className="deal_info_content_inner">
                      <div className="left">거래지역</div>
                      <div className="right">서울특별시 광진구</div>
                    </div>
                    <div className="deal_info_content_inner">
                      <div className="left">연락처</div>
                      <div className="right">010-0000-0000</div>
                    </div>
                  </div>

                  <div className="bike_info sub_title">바이크 정보</div>
                  <div className="bike_info_content">
                    <div className="bike_info_item_wrap">
                      <div className="bike_info_item top_info">
                        <div className="title">제조사</div>
                        <div className="info">Honda</div>
                      </div>
                      <div className="bike_info_item top_info">
                        <div className="title">모델명/연식</div>
                        <div className="info">
                          Super Cub(<span>2021</span>)
                        </div>
                      </div>
                    </div>
                    <div className="bike_info_item">
                      <div className="title">구매일자</div>
                      <div className="info">2022-05</div>
                    </div>
                    <div className="bike_info_item">
                      <div className="title">누적주행거리(km)</div>
                      <div className="info">
                        123,456
                        <span style={{ marginLeft: '10px' }}>km</span>
                      </div>
                    </div>
                  </div>
                  <div className="price_info">
                    <span className="price">2,570,000</span>
                    <span className="won">원</span>
                  </div>
                  <div style={{ marginTop: '50px' }}>
                    옵션 70만원 추가상태 / 외관 깔끔함 / 세차 및 왁스코팅 완료 /
                    경정비완료 / 당일출고가능 / 큰 사고없는 깨끗한 매물/
                    가성비좋은 인기차종 / 메트그레이색상 (옵션) - 알루미늄
                    탑박스 - 금장 크로스바 - 무선충전휴대폰거치대 - 시거잭 -
                    열선그립 - 조절식레버 - ABS 브레이크 - BMW 엠블럼 -
                    스마트키2개,일반키2개,탑박스키2개 총6개 (설명) 앞타이어
                    신품급, 오일교환, 각종 경정비 완료하였고 소모품 상태 아주
                    좋습니다 인수 후 손보실 것 없이 바로타시기만 하면 됩니다
                    출고일로부터 2년 3만까지 제조사 무상 A/S 가능하여
                    수리걱정안하셔도되는 최대 장점이 있습니다 XQ125 완신형모델
                    신차가격 399만원 옵션 추가하고... 신차 등록세금... 등등
                    더하면 500만원 가까이 됩니다. 중고 시세감가.. 등등 신차구매
                    생각하면 옵션 잘되어있고, 깨끗한 중고 저렴히 사시는 것이
                    이득이라고 생각됩니다. 동급 빅스쿠터 대비 연비 좋고, 부품
                    매우 저렴하며 부속수급 원활하여 정비 시 스트레스 받으실 일도
                    적습니다 상태어떠냐, 물어보실필요없이 오셔서 보시면 100%
                    만족하시리라 생각됩니다. 저렴히 파는만큼 예약,절충 없이
                    먼저오시는분께 판매합니다.
                  </div>
                </div>
              </div>
              <div className="product_info_wrap"></div>
              <div className="delivery_way_wrap"></div>
              <div className="banner_box"></div>
              <div className="detail_wrap"></div>
              <div className="floating_price lg"></div>
            </div>
          </div>
        </div>
      </S.Content>
      <S.Review>
        <div className="review_title">
          <span className="title">댓글</span>
          <span className="num">6</span>
        </div>
        <div className="review_content">
          <div className="review_write_wrap">
            <div className="profile_main"></div>
            <div className="profile_box">
              <input className="write_input" placeholder="댓글내용"></input>
              <button className="write_btn">게시</button>
            </div>
          </div>

          <div className="review_item_wrap">
            <div className="profile_main"></div>
            <div className="review_item_box">
              <div className="nickname">닉네임01</div>
              <div className="content">댓글내용입니다</div>
              <div className="option_box">
                <div className="date option">2022-05-20</div>
                <div className="re_review option">답글달기</div>
                <div className="notify option">신고하기</div>
              </div>
            </div>
          </div>
          <div className="review_item_wrap">
            <div className="profile_main"></div>
            <div className="review_item_box">
              <div className="nickname">닉네임01</div>
              <div className="content">댓글내용입니다</div>
              <div className="option_box">
                <div className="date option">2022-05-20</div>
                <div className="re_review option">답글달기</div>
                <div className="notify option">신고하기</div>
              </div>
            </div>
          </div>
        </div>
      </S.Review>
    </S.Container>
  )
}

export default MarketDetail
