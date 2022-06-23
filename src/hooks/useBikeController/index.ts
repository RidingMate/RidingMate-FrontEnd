import { useQuery } from 'react-query'
import URL from 'src/api/api.config'
import bikeControllerAPI from 'src/api/BikeControllerAPI'
import queryKeys from './queryKeys'

const useBikeController = () => {
  // const queryClient = useQueryClient()
  const companyListQuery = useQuery(
    queryKeys.companies,
    () =>
      bikeControllerAPI({
        method: 'get',
        url: URL.GET_COMPANY_LIST,
      }),
    { enabled: true }
  )

  return {
    companyList: companyListQuery.isSuccess && companyListQuery.data,
  }
}

export default useBikeController
// const { bikeList } = useBikeController('get', URL.GET_COMPANY_LIST)
