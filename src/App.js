import React from 'react';
import './App.css';

// import Chart from "./Chart/Chart";
import Card from 'react-bootstrap/Card'
import {fetchCurrentData, fetchDailyData} from "./covid_api/data";
import Chart from "./Chart/Chart";
import DropDownList from "./DropDownList/DropDownList";

class App extends React.Component{

    state = {
        dailyData:[],
        data: {},
        country: '',
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
        console.log(this.state.dailyData);
        console.log(this.state.data);
    }

    render() {
        return(
            <div className="main_container">
                <h1>Coronavirus Tracker</h1>
                <DropDownList handleCountryChange = {this.handleCountryChange}></DropDownList>
                <div id="cards_container">
                    <Card>
                        <Card.Img variant="top" src="https://www.globalrecharge.guru/wp-content/uploads/2020/03/coronavirus_3.jpg" className = "photo" />
                        <Card.Body>
                            <Card.Title>Active Cases</Card.Title>
                            <Card.Text>
                                {this.state.data.active}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Number of active cases of COVID-19 in Poland.</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="http://il4.picdn.net/shutterstock/videos/337555/thumb/1.jpg" className = "photo" />
                        <Card.Body>
                            <Card.Title>Recovered</Card.Title>
                            <Card.Text>
                                {this.state.data.recovered}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Number of recovered cases of COVID-19 in Poland.</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://g.foolcdn.com/editorial/images/563647/coronavirus-in-red-background.jpg" className = "photo" />
                        <Card.Body margin = "10px">
                            <Card.Title>Deaths</Card.Title>
                            <Card.Text>
                                {this.state.data.deaths}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Number of deaths caused by COVID-19 in Poland.</small>
                        </Card.Footer>
                    </Card>
                </div>
                <Chart data={this.state.dailyData} country={this.state.country}></Chart>
            </div>
        )
    }
}


export default App;
