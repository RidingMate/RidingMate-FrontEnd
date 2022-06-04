import { useSearchParams } from 'react-router-dom'
import Records from 'src/components/mybike/records'
import PageHeader from 'src/elements/pageHeader'
import * as S from './MyBikeRecordsPage.style'

const MyBikeRecordsPage = () => {
  const [searchParams] = useSearchParams()
  const bikeIndex = searchParams.get('id')
  const recordType = searchParams.get('type')

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <Records bikeIndex={bikeIndex} recordType={recordType} />
    </S.Wrap>
  )
}

export default MyBikeRecordsPage
