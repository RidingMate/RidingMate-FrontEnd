// import targetUrl from 'src/api/api.config'
import targetUrl from 'src/api/api.config'
import customAxios from 'src/hooks/customAxios'

const registBike = async (bike) => {
  const data = await customAxios.post(targetUrl.BIKE_REGIST, bike)
  return data
}

export { registBike }
