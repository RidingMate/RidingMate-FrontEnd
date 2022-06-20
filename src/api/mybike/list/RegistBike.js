import targetUrl from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

const registBike = async (image, query) => {
  const response = await customAxios.post(targetUrl.BIKE_REGIST, image, {
    params: query,
  })
  return response
}

export { registBike }
