import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({ data, country }) => {
  return data.length ? (
    <div className={styles.container}>
      <Line
        height={100}
        width={400}
        data={{
          labels: data.map(({ date }) => date),
          datasets: [
            {
              data: data.map(({ active }) => active),
              label: 'Active',
              borderColor: 'orange',
              fill: true,
            },
            {
              data: data.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              fill: true,
            },
          ],
        }}
      />
    </div>
  ) : (
    <h4 className="message">Cannot load the daily data...</h4>
  );
};
export default Chart;
