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

  const CompanyList = () => {
    return useQuery(
      [{ scope: 'companies' }] as const,
      () =>
        bikeControllerAPI({
          method: 'get',
          url: URL.GET_COMPANY_LIST,
        }),
      options
    )
  }

  const ModelList = (company: string | undefined) => {
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

  const YearList = (company: string | undefined, model: string | undefined) => {
    return useQuery(
      [{ scope: 'years' }, company, model] as const,
      () =>
        bikeControllerAPI({
          method: 'get',
          url: URL.SEARCH_YEAR,
          company: company,
          model: model,
        }),
      {
        ...options,
        enabled:
          typeof company === 'string' && typeof model === 'string'
            ? true
            : false,
      }
    )
  }

  return {
    CompanyList,
    ModelList,
    YearList,
  }
}

export default useBikeController
