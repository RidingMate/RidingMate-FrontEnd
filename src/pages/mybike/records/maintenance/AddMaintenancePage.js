import * as S from './AddMaintenancePage.style'
// import { useSearchParams } from 'react-router-dom'
import PageHeader from '../../../../elements/PageHeader'
import RecordContent from '../../../../components/mybike/records/maintenance/AddMaintenance'

const AddMaintenancePage = () => {
  // const [searchParams] = useSearchParams()

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <RecordContent />
    </S.Wrap>
  )
}

export default AddMaintenancePage