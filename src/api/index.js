const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    try {
        let changeableURL = url;

        if (country && country!=='global' ){
            changeableURL = `${url}/countries/${country}`;
        }
        const response = await fetch(changeableURL);
        const data = await response.json();
        const {confirmed, recovered, deaths, lastUpdate} = data; 
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData = async () =>{
    try {
        const response = await fetch(`${url}/daily`);
        const data = await response.json();

        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        // console.log('Modified Data',modifiedData)
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () =>{
    try {
        const response = await fetch(`${url}/countries`);
        const { countries } = await response.json();
        //  console.log('countries Data',countries)
        // return countries.length?countries.map(({country})=> country.name):[];
        return countries;
    } catch (error) {
        console.log(error);
    }
}