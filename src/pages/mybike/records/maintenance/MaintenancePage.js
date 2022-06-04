import * as S from './MaintenancePage.style'
// import { useSearchParams } from 'react-router-dom'
import PageHeader from '../../../../elements/PageHeader'
import RecordContent from '../../../../components/mybike/records/maintenance/Maintenance'

const MaintenancePage = () => {
  // const [searchParams] = useSearchParams()

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <RecordContent />
    </S.Wrap>
  )
}

export default MaintenancePage