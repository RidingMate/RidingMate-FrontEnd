import URL from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

const registBike = async (image, query) => {
  const response = await customAxios.post(URL.BIKE_REGIST, image, {
    params: query,
  })
  return response
}

export { registBike }
