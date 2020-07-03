import React from 'react';
import './App.css';

// import Chart from "./Chart/Chart";
import Card from 'react-bootstrap/Card'
import {fetchCurrentData, fetchDailyData} from "./covid_api/data";
import Chart from "./Chart/Chart";

class App extends React.Component{

    state = {
        data: {},
    }


    async componentDidMount() {
        const fetchedData = await fetchCurrentData();
        this.setState({data: fetchedData});
        fetchDailyData();

    }

    render() {
        return(
            <div className="main_container">
                <h1>Coronavirus Tracker</h1>
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
                <Chart></Chart>
            </div>
        )
    }
}


export default App;
