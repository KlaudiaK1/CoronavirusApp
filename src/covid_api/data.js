import axios from 'axios';

export const fetchCurrentData = async (country) => {
    const today = new Date();
    const prevDay = new Date();
    prevDay.setDate(today.getDate()-1);

    try{
        const currentData = (await axios.get(`https://api.covid19api.com/country/${country}?from=${prevDay.toISOString().substring(0, 10)}T00:00:00Z&to=${today.toISOString().substring(0, 10)}T00:00:00Z`)).data[0];

        const active = currentData.Active;
        const recovered = currentData.Recovered;
        const deaths = currentData.Deaths;
        const date = new Date(currentData.Date).toDateString();

        return {active, recovered, deaths, date};
    }
    catch (error) {
        console.log(error);
    }
};


export const fetchDailyData = async (country) => {

    try {
        const { data } = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`);

        const modifiedData = data.map((dailyData) =>({
            active: dailyData.Active,
            deaths: dailyData.Deaths,
            date: new Date(dailyData.Date).toDateString(),
        }));

        //No data on 24th June 2020 for Poland
        // const index = modifiedData.findIndex(i => i.date === "Wed Jun 24 2020");
        // modifiedData.splice(index, 1);
        console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const countries = (await axios.get(`https://api.covid19api.com/summary`)).data.Countries;
        console.log(countries);
        const countriesNames = countries.map((fetchedCountries) => fetchedCountries.Country);
        console.log(countriesNames);
        return countriesNames;
    } catch (error) {
        return error;
    }
};