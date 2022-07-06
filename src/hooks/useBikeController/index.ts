import { useQuery } from 'react-query'
import URL from 'src/api/api.config'
import bikeControllerAPI from 'src/api/BikeControllerAPI'

export interface BikeRegistFormType {
  bikeNickName: string
  bikeRole: 'representative' | 'normal'
  company: string
  dateOfPurchase: string
  mileage: number
  model: string
  year: number
}

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
          params: { company: company },
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
          params: { company: company, model: model },
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

  const PostBikeInfo = (params: BikeRegistFormType, data: FormData) => {
    return useQuery(
      [{ scope: 'regist' }, params, data] as const,
      () =>
        bikeControllerAPI({
          method: 'post',
          url: URL.BIKE_REGIST,
          data: data,
          params: params,
        }),
      options
    )
  }

  return {
    CompanyList,
    ModelList,
    YearList,
    PostBikeInfo,
  }
}

export default useBikeController
