import React from "react";
import {fetchCountries} from "../covid-api/data";
import {useEffect, useState} from "react";
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './DropDownList.module.css';

const DropDownList = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetch();
    }, []);

    return(
        fetchedCountries[0] ? <div className={styles.container}>
            <FormControl>
                <NativeSelect defaultValue = "Poland" onChange={(e => handleCountryChange(e.target.value))}>
                    <option style={{background: '#606060'}} value="Poland">Poland</option>
                    {fetchedCountries.map((country, i) => <option style={{background: '#606060'}} key = {i} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div> : <h4>Cannot load a list of countries. There is probably a problem with your Internet connection or there are some bugs in the api.</h4>

    )
}
export default DropDownList;

