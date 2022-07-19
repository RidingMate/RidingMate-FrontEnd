import { useMutation, useQuery } from 'react-query'
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

export interface MutationBikeKeyType {
  data: FormData
  params: BikeRegistFormType
}

const useBikeController = () => {
  // const queryClient = useQueryClient()

  const options = {
    enabled: true,
    refetchOnWindowFocus: false,
  }

  const getBikeList = () => {
    return useQuery(
      [{ scope: 'myBike' }] as const,
      () =>
        bikeControllerAPI({
          method: 'get',
          url: URL.GET_BIKE_LIST,
        }),
      options
    )
  }

  const getCompanyList = () => {
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

  const getModelList = (company: string | undefined) => {
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

  const getYearList = (
    company: string | undefined,
    model: string | undefined
  ) => {
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

  // mutationKey는 하나만 존재할 수 있기 때문에
  // 여러 param을 넣으려면 객체의 형태로 넣어야 함
  const registMutation = useMutation((bikeInfo: MutationBikeKeyType) =>
    bikeControllerAPI({
      method: 'post',
      url: URL.BIKE_REGIST,
      data: bikeInfo.data,
      params: bikeInfo.params,
    })
  )

  return {
    getCompanyList,
    getModelList,
    getYearList,
    getBikeList,
    registBikeInfo: registMutation.mutate,
  }
}

export default useBikeController
