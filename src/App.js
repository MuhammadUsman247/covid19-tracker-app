import { useState,useEffect } from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Charts, CountryPicker} from './components';
import { fetchData } from './api';
import coronaImage from './images/image.png'
import styles from './App.module.css';

function App() {
  const [data, setData] = useState(null);
  const [country,setCountry] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      // console.log('Use Reducer Before Fecthing API');
      let fetchedData = await fetchData();
      
      // console.log('Use Reducer Before Setting Satate');

      setData (fetchedData);

      // console.log('Use Reducer After Fecthing API',fetchedData);
    }
    fetchMyAPI()
  }, [])

  let handleCountryChange= async (country)=>{
    console.log('CountryName:',country);
    //fetch country data
    let fetchedData = await fetchData(country);
      
    setData (fetchedData);
    setCountry(country);
    console.log('Use Reducer After Fecthing API',fetchedData);
  

    //set state
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Covid19-Tracking-App" />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
