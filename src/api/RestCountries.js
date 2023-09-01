import axios from "axios"
export  function getCountryByCode (payload) {
    const response =  axios.get(`https://restcountries.com/v3.1/alpha/${payload}`)
    return response
}

export  function getAllCountry (querystring) {
    const response = axios.get(`https://restcountries.com/v3.1/all?${querystring}`)
    return response
}