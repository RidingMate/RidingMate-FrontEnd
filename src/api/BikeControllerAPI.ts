import axios, { AxiosResponse, Method } from 'axios'

export interface bikeControllerAPIProps {
  method: Method
  url: string
  id?: number | number[]
  data?: FormData
  config?: object
}

const bikeControllerAPI = async ({
  method,
  url,
  id,
  data,
  config,
}: bikeControllerAPIProps): Promise<AxiosResponse | undefined> => {
  const baseAxios = axios.create({
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWR4IjoxMywiaXNTb2NpYWxVc2VyIjpmYWxzZSwic3ViIjoidGVzdDYyMCIsImlhdCI6MTY1NTg3OTgzNywiZXhwIjoxNjYzNjU1ODM3fQ.kHuFMUor8a0I47JvfOJ8bivdCuXR6SmhXr6EWPUZuAeJ9QACooVEQrAFZonqRPb0gV-IXiFvXYXw6QCdhn3nPQ',
      accept: '*/*',
    },
  })

  try {
    switch (method) {
      case 'get' || 'GET':
        if (id) return await baseAxios.get(`${url}/${id}`, config)
        else return await baseAxios.get(url, config)

      case 'post' || 'POST':
        return await baseAxios.post(url, data, config)

      case 'put' || 'PUT':
        return await baseAxios.put(url, data, config)

      case 'delete' || 'DELETE':
        if (id) return await baseAxios.get(`${url}/${id}`)
        else return await baseAxios.get(url)

      default:
        console.log('method error')
    }
  } catch (error) {
    console.log(' bikeControllerAPI error!', error)
  }
}

export default bikeControllerAPI
