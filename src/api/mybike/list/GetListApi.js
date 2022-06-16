// import targetUrl from 'src/api/api.config'
import targetUrl from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

const getBikeList = async () => {
  const response = await customAxios.get(targetUrl.BIKE_GET_LIST)
  return response.data
}

export { getBikeList }
