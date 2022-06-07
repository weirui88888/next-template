import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api4.bybutter.com/v4',
  timeout: 2000,
  headers: { authorization: 'Butter e40e6a3e523be7c725d515ce0ade7347' }
})

export default instance
