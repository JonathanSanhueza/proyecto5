import axios from 'axios'

const backendUrlLocal = "http://localhost:4000"
const backendUrlProd='https://api-proyecto-5.onrender.com'
const axiosClient=axios.create({
    baseURL :backendUrlProd,
})

export default axiosClient