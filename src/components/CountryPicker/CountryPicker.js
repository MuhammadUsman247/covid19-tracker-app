import React,{useState,useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountriesAPI() {
          setCountries(await fetchCountries());      
        }
        fetchCountriesAPI()
      }, [setCountries]);
    
      console.log('in country picker', countries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country,i)=><option key={i} value={country.name}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;