import React, { useState } from 'react'
import './Country.css'
import CountryDetail from './CountryDetail'
import Autosuggest from 'react-autosuggest'

function CountrySearch(props) {
    const [suggestions, setSuggestions] = useState([])
    const [value, setValue] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null)

    let lastFetchTime = 0;
    const fetchInterval = 1000; // 1 giây
    const handleInputChange = (value) => {
        const currentTime = Date.now();

        if (currentTime - lastFetchTime >= fetchInterval) {
            getSuggestions(value);
            lastFetchTime = currentTime;
        }
    }

    const getSuggestions = async (value) => {
        try {
            const data = await props.getSuggestions(value)
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        }
    }

    const handleChoose = async (value) => {
        try {
            if (selectedCountry) setSelectedCountry(null)
            const result = await props.getSelected(value.cioc)
            setSelectedCountry(result)
            setSuggestions([])
            setValue('')
        } catch (error) {
            console.error('Error fetching country data:', error);
            setSelectedCountry(null)
        }
    }

    return (
        <>
            <h1>Tra cứu thông tin Quốc gia 11</h1>
            <label htmlFor="country-input">Nhập tên quốc gia hoặc khu vực:</label>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => handleInputChange(value)}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
                inputProps={{
                    placeholder: 'Ví dụ: Vietnam',
                    value,
                    onChange: (_, { newValue }) => setValue(newValue),
                }}
                onSuggestionSelected={(_, { suggestion }) => handleChoose(suggestion)}
            />
            {selectedCountry && <CountryDetail data={selectedCountry}/>}
        </>
    )
}
export default CountrySearch