import { useQuery } from 'react-query'
import URL from 'src/api/api.config'
import bikeControllerAPI from 'src/api/BikeControllerAPI'
import queryKeys from './queryKeys'

const useBikeController = () => {
  // const queryClient = useQueryClient()
  const options = {
    enabled: true,
    refetchOnWindowFocus: false,
  }
  const companyListQuery = useQuery(
    queryKeys.companies,
    () =>
      bikeControllerAPI({
        method: 'get',
        url: URL.GET_COMPANY_LIST,
      }),
    options
  )

  return {
    companyList:
      companyListQuery.isSuccess && companyListQuery.data.data.response,
  }
}

export default useBikeController
