import { useSearchParams } from 'react-router-dom'
import BikeRecords from 'src/components/mybike/BikeRecords'
import PageHeader from 'src/elements/PageHeader'
import * as S from './MyBikeRecordsPage.style'

const MyBikeRecordsPage = () => {
  const [searchParams] = useSearchParams()
  const bikeIndex = searchParams.get('id')
  const recordType = searchParams.get('type')

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <BikeRecords bikeIndex={bikeIndex} recordType={recordType} />
    </S.Wrap>
  )
}

export default MyBikeRecordsPage
