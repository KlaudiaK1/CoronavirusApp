import React from 'react';
import './App.css';

import Card from 'react-bootstrap/Card';
import { fetchCurrentData, fetchDailyData } from './covid-api/data';
import Chart from './chart/Chart';
import Cards from './cards/Cards';
import DropDownList from './drop-down-list/DropDownList';
import styles from './App.css'

class App extends React.Component {
  state = {
    dailyData: [],
    data: {},
    country: 'Poland',
  };

  async componentDidMount() {
    const [fetchedData, dailyData] = await Promise.all([
      fetchCurrentData('Poland'),
      fetchDailyData('Poland')
      ]
    );
    this.setState({ data: fetchedData, dailyData: dailyData });
  }
  handleCountryChange = async (country) => {
    const [fetchedData,dailyData] = await Promise.all([
      fetchCurrentData(country),
      fetchDailyData(country)
      ]
    );
    this.setState({
      dailyData: dailyData,
      data: fetchedData,
      country: country,
    });
  };

  render() {
    return(
      <div className={styles.main_container}>
        <h1>Coronavirus Tracker</h1>
          <DropDownList
            handleCountryChange={this.handleCountryChange}
          ></DropDownList>
        <Cards data={this.state.data} country={this.state.country}></Cards>
        <Chart data={this.state.dailyData} country={this.state.country}></Chart>
      </div>
    );
  }
}

export default App;
