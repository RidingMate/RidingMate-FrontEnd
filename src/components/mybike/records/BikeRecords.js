import InfoBox from 'src/elements/infoBox'
import Select from 'src/elements/select'
import { makeRangeList } from 'src/hooks/utils'
import * as S from './BikeRecords.style'
import FuelCard from './refuel/Card'
import RepairCard from './maintenance/Card'

const BikeRecords = ({ bikeIndex, recordType }) => {
  const date = new Date()
  const nowYear = date.getFullYear()
  const fuelInfo = recordType === 'fuel'

  // 년도와 월 둘 다 적용한 리스트인데 양이 너무 많아져서 일단 주석처리 했습니다.
  // const yearToMonthList = () => {
  //   const temp = []
  //   makeRangeList(2000, nowYear()).forEach((year) => {
  //     makeRangeList(1, 12).forEach((month) => {
  //       temp.push([year, month])
  //       console.log(year, month)
  //     })
  //   })
  //   return temp
  // }

  return (
    <S.Wrap>
      <S.Header>
        <h1>내 바이크{bikeIndex}</h1>
        <p>혼다 Super Cub</p>
      </S.Header>
      {fuelInfo && (
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
          <h2>{fuelInfo ? '주유' : '정비'}기록</h2>
          <Select
            width={'130px'}
            height={'40px'}
            defaultContent={fuelInfo ? '1월' : nowYear}
          >
            {fuelInfo
              ? makeRangeList(1, 12).map((month, idx) => (
                  <option key={idx}>{month}월</option>
                ))
              : makeRangeList(2000, nowYear).map((year, idx) => (
                  <option key={idx}>{year}년</option>
                ))}
          </Select>
        </div>
        <div className="record-announcement">
          {fuelInfo ? (
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
          <h2>상세 {fuelInfo ? '주유' : '정비'}기록</h2>
          <div className="detail-head-btns">
            {fuelInfo && <button className="refresh" />}
            <button className="add" />
          </div>
        </div>
        {fuelInfo ? (
          <div className="detail-fuel-cards">
            <FuelCard amount={11} price={10000} date={'1111-11-11'} />
            <FuelCard amount={22} price={20000} date={'2222-22-22'} />
            <FuelCard amount={33} price={30000} date={'3333-33-33'} />
          </div>
        ) : (
          <div className="detail-repair-cards">
            <RepairCard
              serviceName={'점검1'}
              serviceCenter={'서비스센터1'}
              serviceCharge={11111}
              serviceDate={'1111-11-11'}
            />
            <RepairCard
              serviceName={'점검2'}
              serviceCenter={'서비스센터2'}
              serviceCharge={22222}
              serviceDate={'2222-22-22'}
            />
            <RepairCard
              serviceName={'점검3'}
              serviceCenter={'서비스센터3'}
              serviceCharge={33333}
              serviceDate={'3333-33-33'}
            />
          </div>
        )}
      </S.Detail>
    </S.Wrap>
  )
}

export default BikeRecords
