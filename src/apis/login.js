import axios from 'axios'

const login = async data => {
  try {
    const res = await axios.post(
      'https://sampleapiproject.azurewebsites.net/api/auth', data)
    return res
  } catch (error) {
    alert(`Eror:  ${error}. "Please log in again!`)
  }
}

export default login
