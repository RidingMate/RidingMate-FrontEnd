import axios from 'axios'

const customAxios = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    // 일단 임시적으로 제 swagger 개인 api key를 넣었습니다.
    Authorization: '3dc36394-f995-4f11-9b2a-06ea15384d00',
  },
})

export default customAxios
