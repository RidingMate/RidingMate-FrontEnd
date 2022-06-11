import * as S from './BikeRecords.style'
import { useNavigate } from 'react-router-dom'
import InfoBox from 'src/elements/infoBox'
import Select from 'src/elements/select'
import Button from 'src/elements/button'
import { makeRangeList } from 'src/hooks/utils'
import FuelCard from './refuel/card'
import MaintenanceCard from './maintenance/card'
import bike_main_mark_img from 'src/assets/images/pages/mybike/bike_main_mark_img.svg'

const BikeRecords = ({ bikeIndex, pageParams }) => {
  const date = new Date()
  const nowYear = date.getFullYear()
  const navigate = useNavigate()
  const isRefuelingPage = pageParams === 'refueling'

  return (
    <S.Wrap>
      <S.Header>
        <h1>내 바이크{bikeIndex}</h1>
        <p>혼다 Super Cub</p>
      </S.Header>
      {isRefuelingPage && (
        <S.Info>
          <div className="info-head">
            <h2>연비정보</h2>
          </div>
          <div className="info-box-wrap">
            <InfoBox className={'info-box'} width={'440px'} height={'140px'}>
              <h3>누적 주행거리</h3>
              <p>
                <b>12,345</b>km
              </p>
            </InfoBox>
            <InfoBox className={'info-box'} width={'440px'} height={'140px'}>
              <h3>평균연비</h3>
              <p>
                <b>9.845</b>km/L
              </p>
            </InfoBox>
          </div>
        </S.Info>
      )}
      <S.Record>
        <div className="record-head">
          <h2>{isRefuelingPage ? '주유' : '정비'}기록</h2>
          <Select
            width={'130px'}
            height={'40px'}
            defaultContent={isRefuelingPage ? '1월' : `${nowYear}년`}
          >
            {isRefuelingPage
              ? makeRangeList(1, 12)
              : makeRangeList(2000, nowYear, true)}
          </Select>
        </div>
        <div className="record-announcement">
          {isRefuelingPage ? (
            <p>
              이번 달 총 주유량은 <b>100L</b>, 총 주유비용은 <b>123,456원</b>
              이에요.
            </p>
          ) : (
            <p>
              2022년 정비기록 <b>2건</b>, 총 정비비용은 <b>123,456원</b>이에요.
            </p>
          )}
        </div>
      </S.Record>
      <S.Detail>
        <div className="detail-head">
          <h2>상세 {isRefuelingPage ? '주유' : '정비'}기록</h2>
          <div className="detail-head-btns">
            {isRefuelingPage && <button className="refresh" />}
            <button className="add" />
          </div>
        </div>
        <div className="detail-cards-wrap">
          {isRefuelingPage ? (
            <div className="refueling-cards">
              <FuelCard amount={11} price={10000} date={'1111-11-11'} />
              <FuelCard amount={22} price={20000} date={'2222-22-22'} />
              <FuelCard amount={33} price={30000} date={'3333-33-33'} />
            </div>
          ) : (
            <div className="maintanance-cards">
              <MaintenanceCard
                id={1}
                serviceName={'점검1'}
                serviceCenter={'서비스센터1'}
                serviceCharge={11111}
                serviceDate={'1111-11-11'}
              />
              <MaintenanceCard
                id={2}
                serviceName={'점검2'}
                serviceCenter={'서비스센터2'}
                serviceCharge={22222}
                serviceDate={'2222-22-22'}
              />
              <MaintenanceCard
                id={3}
                serviceName={'점검3'}
                serviceCenter={'서비스센터3'}
                serviceCharge={33333}
                serviceDate={'3333-33-33'}
              />
            </div>
          )}
        </div>
        <div className="records-add">
          <div className="notice">
            {isRefuelingPage
              ? '입력된 주유기록이 없어요 :('
              : '입력된 기록이 없어요 :('}
          </div>
          <Button
            width={'400px'}
            content={
              isRefuelingPage ? '주유기록 추가하기' : '정비기록 추가하기'
            }
            onClick={() =>
              isRefuelingPage
                ? navigate('/mybike/refueling/add')
                : navigate('/mybike/maintenance/add')
            }
          >
            <img src={bike_main_mark_img} alt="" />
          </Button>
        </div>
      </S.Detail>
    </S.Wrap>
  )
}

export default BikeRecords
