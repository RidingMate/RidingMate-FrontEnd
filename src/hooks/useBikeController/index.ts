import { useQuery } from 'react-query'
import URL from 'src/api/api.config'
import bikeControllerAPI from 'src/api/BikeControllerAPI'
// import queryKeys from './queryKeys'

const useBikeController = () => {
  // const queryClient = useQueryClient()
  const options = {
    enabled: true,
    refetchOnWindowFocus: false,
  }

  const companyListQuery = useQuery(
    [{ scope: 'companies' }] as const,
    () =>
      bikeControllerAPI({
        method: 'get',
        url: URL.GET_COMPANY_LIST,
      }),
    options
  )

  const useModelsByCompany = (company: string | undefined) => {
    return useQuery(
      [{ scope: 'models' }, company] as const,
      () =>
        bikeControllerAPI({
          method: 'get',
          url: URL.SEARCH_MODEL,
          company: company,
        }),
      { ...options, enabled: typeof company === 'string' ? true : false }
    )
  }

  return {
    companyList:
      companyListQuery.isSuccess && companyListQuery.data.data.response,
    useModelsByCompany,
  }
}

export default useBikeController
