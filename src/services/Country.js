import api from '../api/RestCountries'
export const getAllCountryService = async (querystring) => {
    let res = await api.getCountriesByName(querystring)
    if (res && res.data) {
        let data = res.data
        return data.map(x => {
            return {    
                name: x.name.common,
                cioc: x.cioc
            }
        })
    }
    return null
}
export const getDetailCountry = async (paload) => {
    const res = await api.getCountryByCode(paload)
    if (res && res.data) {
        let data = res.data[0]
        return {
            name: data.name.common,
            capital: data.capital,
            population: data.population,
            area: data.area,
            mainLang: Object.values(data.languages)[0],
            mainCurrency: Object.values(data.currencies)[0].name,
            continent: data.continents[0],
            subRegion: data.subregion,
            timezones: data.timezones,
            callingCode: `${data.idd.root}${data.idd.suffixes[0]}`,
            domains: data.tld,
            googleMaps: data.maps.googleMaps,
            flag: data.flags.svg,
            coatOfArm: data.coatOfArms.svg
        }
    }
    return null
}