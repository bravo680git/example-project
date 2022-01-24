//src/apis/fetchData.js
import axios from 'axios'

const fetchData = async (authToken) =>  {
   
    try {
      const res= await axios.get(
        "https://sampleapiproject.azurewebsites.net/stations/3/details",
      {headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      return res.statusText==="OK" ? res : false
    }
    catch {
      return false
    }
}

export default fetchData