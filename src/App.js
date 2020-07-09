import React from 'react';
import './App.css';

import Card from 'react-bootstrap/Card'
import {fetchCurrentData, fetchDailyData} from "./covid-api/data";
import Chart from "./chart/Chart";
import DropDownList from "./drop-down-list/DropDownList";

class App extends React.Component{

    state = {
        dailyData:[],
        data: {},
        country: 'Poland',
    }


    async componentDidMount() {
        const fetchedData = await fetchCurrentData("Poland");
        this.setState({data: fetchedData});
        const dailyData = await fetchDailyData("Poland");
        this.setState({dailyData: dailyData});
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchCurrentData(country);
        this.setState({data: fetchedData, country: country});
        const dailyData = await fetchDailyData(country);
        this.setState({dailyData: dailyData});
    }



    render() {
        return(
            (this.state.data !== undefined) ? <div className="main_container">
                <h1>Coronavirus Tracker</h1>
                <div id="drop_down">
                    <DropDownList handleCountryChange = {this.handleCountryChange}></DropDownList>
                </div>

                <div id="cards_container">
                    <Card>
                        <Card.Img variant="top" src="https://www.globalrecharge.guru/wp-content/uploads/2020/03/coronavirus_3.jpg" className = "photo" />
                        <Card.Body>
                            <Card.Title className = "card_title">Active</Card.Title>
                            <Card.Text id = "active">
                                {this.state.data.active}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className = "card_footer">
                            <small className="text-muted">Number of active cases of COVID-19 in {this.state.country}.</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="http://il4.picdn.net/shutterstock/videos/337555/thumb/1.jpg" className = "photo" />
                        <Card.Body>
                            <Card.Title className = "card_title">Recovered</Card.Title>
                            <Card.Text id = "recovered">
                                {this.state.data.recovered}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className = "card_footer">
                            <small className="text-muted">Number of recovered cases of COVID-19 in {this.state.country}.</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://g.foolcdn.com/editorial/images/563647/coronavirus-in-red-background.jpg" className = "photo" />
                        <Card.Body margin = "10px">
                            <Card.Title className = "card_title">Deaths</Card.Title>
                            <Card.Text id = "deaths">
                                {this.state.data.deaths}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className = "card_footer">
                            <small className="text-muted">Number of deaths caused by COVID-19 in {this.state.country}.</small>
                        </Card.Footer>
                    </Card>
                </div>
                    <Chart data={this.state.dailyData} country={this.state.country}></Chart>
            </div> : <h4>Cannot load the data</h4>
        )
    }
}


export default App;
