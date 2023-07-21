import axios from 'axios'

const backendUrlLocal = "http://localhost:4000"
const backendUrlProd='url producion en render'
const axiosClient=axios.create({
    baseURL :backendUrlLocal,
})

export default axiosClient