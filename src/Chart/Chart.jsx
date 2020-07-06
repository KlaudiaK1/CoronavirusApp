import React, {useState, useEffect} from "react";
import {fetchDailyData} from "../covid_api/data";
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({data, country}) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
         setDailyData(await fetchDailyData());
        }
        fetch();
        // const index = dailyData.findIndex(i => i.date === "Wed Jun 24 2020"); // Let's say it's Bob.
        // delete dailyData[index];
        }, []);
        // console.log(dailyData);
    console.log(data);
    console.log(dailyData);

    return(
        <div>
            <Line data = {{
                labels: data.map(({date}) => date),
                datasets: [{
                    data: data.map(({active}) => active),
                    label: 'Active',
                    borderColor: '#000000',
                    fill: true,
                },{
                    data: data.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#253052',
                    fill: true,
                }],
            }}/>
        </div>

    )
}
export default Chart;