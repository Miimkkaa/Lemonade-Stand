import React, {useState}from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import styles from './mainpage.module.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function MainPage() {

    return (
        <div className={styles.container}>


            <Card style={{ width: '50rem'}} style={{ border: '0px' }} className="justify-content-md-center mx-auto align-content-center hero" >
                <Card.Body className={styles.hero}>
                    <Card.Title style={{ fontSize: '48pt'}}>Are you thirsty?</Card.Title>
                    <Card.Text style={{fontSize: '24pt', color: 'black'}}>
                        Get a quick refreshement at our Lemonade stand!
                    </Card.Text>
                    <Button variant="mybutton" href="/getLemonade" style={{fontSize: '16pt'}} className="my-button">See menu</Button>
                </Card.Body>
            </Card>
            <Image src="https://i.imgur.com/gtOlGfG.png"></Image>

        </div>
    )
}
// <Link to="/getLemonade">See catalog</Link>

export default MainPage;
