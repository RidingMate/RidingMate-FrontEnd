import axios from 'axios'

const customAxios = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2siLCJpYXQiOjE2NTQ5MTQ0OTUsImV4cCI6MTY2MjY5MDQ5NX0._dyZrQePrijALBJFSshODGoo9AKia-oC4d7OcVmcau3kYpBfB1AObSYkguWSHfGgaTU8f5631JTtWm0TLterKg`,
    'Content-Type': 'application/json',
  },
})

export default customAxios
