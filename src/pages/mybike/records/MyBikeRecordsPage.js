import { useSearchParams } from 'react-router-dom'
import Records from 'src/components/mybike/records'
import Detail from 'src/components/mybike/records/maintenance/detail'
import PageHeader from 'src/elements/pageHeader'
import * as S from './MyBikeRecordsPage.style'

const MyBikeRecordsPage = () => {
  const [searchParams] = useSearchParams()
  const bikeIndex = searchParams.get('id')
  const recordType = searchParams.get('type')

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      {recordType !== 'detail' ? (
        <Records bikeIndex={bikeIndex} recordType={recordType} />
      ) : (
        <Detail bikeIndex={bikeIndex} />
      )}
    </S.Wrap>
  )
}

export default MyBikeRecordsPage
