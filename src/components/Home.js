import React, { useState } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import CountryDetail from './Country/CountryDetail'
import LanguageSelector from './LanguageSelector'
import * as countryService from '../services/Country'

function App() {
  const [countryName, setCountryName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = async (suggestion) => {
    try {
      if (selectedCountry) setSelectedCountry(null)
      countryService.getDetailCountry(`${suggestion.cioc}`).then((result) => {
        setSelectedCountry(result.data[0])
        setSuggestions([])
        setValue('')
      })
    } catch (error) {
    console.error('Error fetching country data:', error);
    setSelectedCountry(null)
  }
}


const getSuggestions = async (value) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${value}?fields=name,cioc`);
    const data = response.data;
    setSuggestions(data.map((country) => country));
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    setSuggestions([]);
  }
}

let lastFetchTime = 0;
const fetchInterval = 1000; // 1 giây

function handleInputChange(value) {
  const currentTime = Date.now();

  if (currentTime - lastFetchTime >= fetchInterval) {
    getSuggestions(value);
    lastFetchTime = currentTime;
  }
}


return (
  <div className="App">
    <LanguageSelector />
    <h1>Tra cứu thông tin Quốc gia</h1>
    <label htmlFor="country-input">Nhập tên quốc gia hoặc khu vực:</label>
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) => handleInputChange(value)}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion.name.common}
      renderSuggestion={(suggestion) => <div>{suggestion.name.common}</div>}
      inputProps={{
        placeholder: 'Ví dụ: Vietnam',
        value,
        onChange: (_, { newValue }) => setValue(newValue),
      }}
      onSuggestionSelected={(_, { suggestion }) => handleSearch(suggestion)}
    />
    {selectedCountry && (
      <CountryDetail country={selectedCountry} />
    )}
  </div>
);
}

export default App;
