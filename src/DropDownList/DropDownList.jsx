import React from "react";
import {fetchCountries} from "../covid_api/data";
import {useEffect, useState} from "react";
import { FormControl, NativeSelect } from '@material-ui/core';


const DropDownList = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetch();
    }, []); //setfetchedcountries

    return(
        <FormControl>
            <NativeSelect defaultValue = "Poland" onChange={(e => handleCountryChange(e.target.value))}>
                <option value="Poland">Poland</option>
                {fetchedCountries.map((country, i) => <option key = {i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}
export default DropDownList;

