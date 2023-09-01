import * as api  from '../api/RestCountries'
export  const getAllCountryService =  (querystring) => {
    let result =  api.getAllCountry(querystring)
    return result
}
export  const getDetailCountry =  (paload) => {
    let result =  api.getCountryByCode(paload)
    return result
}