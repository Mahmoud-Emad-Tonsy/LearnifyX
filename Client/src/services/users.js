import axios from 'axios'
import { getAuthHeader } from './config'

const baseURL = '/users'

const register = async (credentials) => {
  // const response = await axios.post(`${baseURL}/register`, credentials);
  // return response.data
  try {
    console.log('Sending registration data:', credentials);
    const response = await axios.post(`${baseURL}/register`, credentials);
    console.log('Registration response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
}

const login = async (credentials) => {
  const response = await axios.post(`${baseURL}/login`, credentials)
  return response.data
}

const logout = async () => {
  await axios.post(`${baseURL}/logout`, undefined, getAuthHeader())
}

const update = async (user) => {
  const response = await axios.patch(
    `${baseURL}/me`,
    {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      username: user.username,
      photo: user.photo
    },
    getAuthHeader()
  )
  return response.data
}

const usersService = { register, login, logout, update }
export default usersService
