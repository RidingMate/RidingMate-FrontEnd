import * as S from './Bike.style'
import { Link } from 'react-router-dom'
import Button from 'src/elements/button'
import tempImgSrc from 'src/assets/images/pages/mybike/bike_list_example_img.jpeg'
import InfoBox from 'src/elements/infoBox'

const Bike = () => {
  const bikeId = 1
  return (
    <S.Bike>
      <S.BikeHeader>
        <S.BikeHeaderTitle>
          <h2>내 바이크 1</h2>
          <p>혼다 Super Club</p>
        </S.BikeHeaderTitle>
        <S.BikeHeaderBtns>
          <button className="btn-edit" />
          <button className="btn-delete" />
        </S.BikeHeaderBtns>
      </S.BikeHeader>
      <S.BikeContents>
        <S.BikeImage src={tempImgSrc}>
          <S.BikeMainMark>
            <div className="logo" />
            <div className="word">MAIN</div>
          </S.BikeMainMark>
        </S.BikeImage>
        <S.BikeInfos>
          <InfoBox className={'info bike-mileage'}>
            <h3>누적 주행거리</h3>
            <b>
              12,345<span>km</span>
            </b>
          </InfoBox>
          <InfoBox className={'info bike-fuel-efficiency'}>
            <h3>평균연비</h3>
            <b>
              9.875<span>km/L</span>
            </b>
          </InfoBox>
          <InfoBox className={'info bike-purchase-date'}>
            <h3>구매일자</h3>
            <b>2022-05</b>
          </InfoBox>
          <S.BikeInfosBtns>
            <Link to={`/mybike/records?id=${bikeId}&type=refueling`}>
              <Button width={'230px'} content={'주유기록(O)'} />
            </Link>
            <Link to={`/mybike/records?id=${bikeId}&type=maintenance`}>
              <Button width={'230px'} content={'정비기록(O)'} />
            </Link>
          </S.BikeInfosBtns>
        </S.BikeInfos>
      </S.BikeContents>
    </S.Bike>
  )
}

export default Bike
