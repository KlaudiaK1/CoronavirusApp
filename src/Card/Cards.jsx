import React from "react";
import Card from 'react-bootstrap/Card'
import styles from './Cards.css';

const Cards = ({data : {confirmed, recovered, deaths, date}}) => {
    if(!confirmed){
        return 'Wait...';
    }
    return(
        <div id="cards_container">
            <Card>
                <Card.Img variant="top" src="https://www.creative-biolabs.com/vaccine/images/Canine-Coronavirus-Vaccines-1.jpeg" className = "photo" />
                <Card.Body>
                    <Card.Title>Active Cases</Card.Title>
                    <Card.Text className = "card_text">
                        {confirmed.value}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                <Card>
                    <Card.Img variant="top" src="https://www.creative-biolabs.com/vaccine/images/Canine-Coronavirus-Vaccines-1.jpeg" className = "photo" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.creative-biolabs.com/vaccine/images/Canine-Coronavirus-Vaccines-1.jpeg" className = "photo" />
                    <Card.Body margin = "10px">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Card>
        </div>
    )
}
export default Cards;