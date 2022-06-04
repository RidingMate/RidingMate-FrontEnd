import * as S from './AddRefuelingPage.style'
// import { useSearchParams } from 'react-router-dom'
import PageHeader from '../../../../elements/PageHeader'
import RecordContent from '../../../../components/mybike/records/refueling/AddRefueling'

const AddRefuelingPage = () => {
  // const [searchParams] = useSearchParams()

  return (
    <S.Wrap>
      <PageHeader main_title={'MY BIKE'} sub_title={'내 바이크'} />
      <RecordContent />
    </S.Wrap>
  )
}

export default AddRefuelingPage