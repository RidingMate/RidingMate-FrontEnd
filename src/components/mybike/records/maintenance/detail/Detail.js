import * as S from './Detail.style'
import InfoBox from 'src/elements/infoBox'
import ImageSlider from 'src/elements/imageSlider'
import img_src_1 from 'src/assets/images/pages/mybike/bike_list_example_img_1.jpeg'
import img_src_2 from 'src/assets/images/pages/mybike/bike_list_example_img_2.jpeg'
import img_src_3 from 'src/assets/images/pages/mybike/bike_list_example_img_3.jpeg'
import img_src_4 from 'src/assets/images/pages/mybike/bike_list_example_img_4.jpeg'

import arrow_button from 'src/assets/images/pages/mybike/records/maintanance/arrow_button.svg'

const Detail = () => {
  const detailImagesForIndex = [img_src_1, img_src_2, img_src_3, img_src_4]

  const historyData = ['오일 교환', '체인 장력']
  return (
    <S.Detail>
      <S.Header>
        <div className="title">상세 정비기록</div>
        <div className="sub-title">
          <div className="word">제목</div>
          <div className="btn-group">
            <button className="edit" />
            <button className="delete" />
          </div>
        </div>
      </S.Header>
      <S.Top>
        <div className="center-name">서비스센터/기관이름</div>
        <div className="date">1111-11-11</div>
      </S.Top>
      <S.Wrap>
        <S.Left>
          <div className="scroll-photos-frame">
            <ImageSlider
              arrowSrc={arrow_button}
              imgArray={detailImagesForIndex}
            />
          </div>
        </S.Left>
        <S.Right>
          <ul className="histories">
            {historyData.map((data, idx) => (
              <li key={idx}>
                <InfoBox className={'history'} theme="solid">
                  <h3>정비항목{idx + 1}</h3>
                  <p>{data}</p>
                </InfoBox>
              </li>
            ))}
          </ul>
          <div className="details">
            <h3>상세내용</h3>
          </div>
          <div className="total-charge">
            <InfoBox className={'charge-box'}>
              <h3>TOTAL</h3>
              <p>
                <b>123,345</b>원
              </p>
            </InfoBox>
          </div>
        </S.Right>
      </S.Wrap>
    </S.Detail>
  )
}

export default Detail
