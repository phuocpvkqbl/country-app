import axios from "axios"
export const getCountryByCode = async (payload) => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${payload}`)
    return response
}

export const getAllCountry = async (querystring) => {
    const response = await axios.get(`https://restcountries.com/v3.1/all?${querystring}`)
    return response
}

export const getCountriesByName = async (querystring) => {
    const response = await axios.get(`https://restcountries.com/v3.1/${querystring}`)
    return response
}

export default { 
    getCountryByCode,
    getAllCountry,
    getCountriesByName
}