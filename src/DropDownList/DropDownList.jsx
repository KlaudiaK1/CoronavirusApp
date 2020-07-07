import React from "react";
import {fetchCountries} from "../covid_api/data";
import {useEffect, useState} from "react";
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './DropDownList.module.css';
import WorldMap from "react-world-map";

const DropDownList = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetch();
    }, []);

    return(
        <div className={styles.container}>
            {/*<WorldMap/>*/}
            <FormControl>
                <NativeSelect defaultValue = "Poland" onChange={(e => handleCountryChange(e.target.value))}>
                    <option style={{background: '#606060'}} value="Poland">Poland</option>
                    {fetchedCountries.map((country, i) => <option style={{background: '#606060'}} key = {i} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>

    )
}
export default DropDownList;

