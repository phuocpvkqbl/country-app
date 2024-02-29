import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import CountryDetail from './Country/CountryDetail'
import LanguageSwitch from './LanguageSwitch'
import * as countryService from '../services/Country'
import CountrySearch from './Country/CountrySearch'

function Home() {
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
      console.error('Error fetching country data: 11', error);
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
      <LanguageSwitch />
      <CountrySearch service={countryService}>
        {selectedCountry && (
          <CountryDetail country={selectedCountry} />
        )}
      </CountrySearch>
    </div>
  );
}

export default Home;
