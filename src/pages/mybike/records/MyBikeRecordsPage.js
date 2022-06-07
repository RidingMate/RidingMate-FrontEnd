import { useSearchParams } from 'react-router-dom'
import Records from 'src/components/mybike/records'
import Detail from 'src/components/mybike/records/maintenance/detail'
import PageHeader from 'src/elements/pageHeader'
import * as S from './MyBikeRecordsPage.style'

const MyBikeRecordsPage = () => {
  const [searchParams] = useSearchParams()
  const bikeIndex = searchParams.get('id')
  const pageParams = searchParams.get('type')

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      {pageParams !== 'detail' ? (
        <Records bikeIndex={bikeIndex} pageParams={pageParams} />
      ) : (
        <Detail bikeIndex={bikeIndex} />
      )}
    </S.Wrap>
  )
}

export default MyBikeRecordsPage
