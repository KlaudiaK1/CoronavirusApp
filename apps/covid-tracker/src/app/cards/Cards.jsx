import React from 'react';
import styles from './Cards.module.css';
import Card from 'react-bootstrap/Card';
const Cards = ({ data, country }) => {
  return (data !== undefined) ? (
    <div id={styles.cards_container}>
      <Card className = {styles.card}>
        <Card.Img
          variant="top"
          src="https://www.globalrecharge.guru/wp-content/uploads/2020/03/coronavirus_3.jpg"
          className={styles.photo}
        />
        <Card.Body>
          <Card.Title className={styles.card_title}>Active</Card.Title>
          <Card.Text id={styles.active}>{data.active}</Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <small>
            Number of active cases of COVID-19 in {country}.
          </small>
        </Card.Footer>
      </Card>
      <Card className = {styles.card}>
        <Card.Img
          variant="top"
          src="http://il4.picdn.net/shutterstock/videos/337555/thumb/1.jpg"
          className={styles.photo}
        />
        <Card.Body>
          <Card.Title className={styles.card_title}>Recovered</Card.Title>
          <Card.Text id={styles.recovered}>{data.recovered}</Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <small>
            Number of recovered cases of COVID-19 in {country}.
          </small>
        </Card.Footer>
      </Card>
      <Card className = {styles.card}>
        <Card.Img
          variant="top"
          src="https://g.foolcdn.com/editorial/images/563647/coronavirus-in-red-background.jpg"
          className={styles.photo}
        />
        <Card.Body margin="10px">
          <Card.Title className={styles.card_title}>Deaths</Card.Title>
          <Card.Text id={styles.deaths}>{data.deaths}</Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <small>
            Number of deaths caused by COVID-19 in {country}.
          </small>
        </Card.Footer>
      </Card>
    </div>
  ) : (
    <h4>Cannot load the current data</h4>
  );
};
export default Cards;
