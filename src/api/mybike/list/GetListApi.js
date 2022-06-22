import URL from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

const getBikeList = async () => {
  const response = await customAxios.get(URL.BIKE_GET_LIST)
  return response
}

export { getBikeList }
