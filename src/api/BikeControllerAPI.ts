import axios, { AxiosRequestConfig, Method } from 'axios'

const bikeControllerAPI = async <T>(
  method: Method,
  url: string,
  id?: number | number[],
  data?: T, // any
  config?: AxiosRequestConfig
) => {
  const baseAxios = axios.create({
    headers: {
      // 일단 임시적으로 제 swagger 개인 api key를 넣었습니다.
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWR4IjoxMywiaXNTb2NpYWxVc2VyIjpmYWxzZSwic3ViIjoidGVzdDYyMCIsImlhdCI6MTY1NTg3OTgzNywiZXhwIjoxNjYzNjU1ODM3fQ.kHuFMUor8a0I47JvfOJ8bivdCuXR6SmhXr6EWPUZuAeJ9QACooVEQrAFZonqRPb0gV-IXiFvXYXw6QCdhn3nPQ',
      accept: '*/*',
    },
  })

  switch (method) {
    case 'get' || 'GET':
      let res
      const reqUrl = url
      // id가 있을 때
      if (id) {
        // 그 id가 1개일 때
        if (typeof id === 'undefined') {
          res = await baseAxios.get(`${url}/${id}`)
        }
        // 그 id가 여러 개일 때
        else if (typeof id === 'object') {
          id.forEach((id) => reqUrl.concat(`/${id}`))
          res = await baseAxios.get(reqUrl)
        }
      } else res = await baseAxios.get(url)
      return res

    case 'post' || 'POST':
      return await baseAxios.post(url, data, config)

    case 'put' || 'PUT':
      console.log('put method')

    case 'delete' || 'DELETE':
      console.log('delete method')

    default:
      console.log('method error')
  }
}

export default bikeControllerAPI
