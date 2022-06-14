import API_URL from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

export const getBikeList = async () => {
  console.log(API_URL.BIKE_GET_LIST)
  const data = await customAxios.get(API_URL.BIKE_GET_LIST)
  return data
}
