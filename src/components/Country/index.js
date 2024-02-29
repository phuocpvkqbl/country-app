import CountrySearch from './CountrySearch'
import * as countryService from '../../services/Country'
function Country() {
    const getSuggestions = async (value) => {
        try {
          const response = await countryService.getAllCountryService(`name/${value}?fields=name,cioc`)
          return response
        } catch (error) {
          console.error('Error fetching suggestions:', error)
          return []
        }
    }

    const getSelectedCountry = async (value) => {
       try {
        const response = await countryService.getDetailCountry(value)
        return response
       }
       catch(error) {

       }
    }

    return (
        <>
        <CountrySearch getSuggestions={getSuggestions} getSelected={getSelectedCountry}/>
        </>
    )
}

export default Country