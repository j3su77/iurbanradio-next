import axios from "axios";


 const iurbanApi = axios.create({
    baseURL: "/api"

})

export default iurbanApi;