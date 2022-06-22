import axios from 'axios'

const customAxios = axios.create({
  headers: {
    // 일단 임시적으로 제 swagger 개인 api key를 넣었습니다.
    Authorization: '3d48e6a8-88b1-49a1-8b18-440b365d8f01',
    accept: '*/*',
  },
})

export default customAxios
