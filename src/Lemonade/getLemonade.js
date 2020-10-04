import React, {useState, useEffect} from 'react';
import firebaseConfig from '../firebaseConfig';
import 'firebase/firestore';
import {createStore} from 'redux';
import styles from "./getLemonade.module.css"
import Button from "react-bootstrap/Button"

function GetLemonade() {
// GET from firebase
    const [lemonade, setLemonade ] = useState([]);

    useEffect(() => {
        const db = firebaseConfig.firestore();

        return db.collection("lemonade").onSnapshot((snapshot) => {
            const lemonadeData = [];
            snapshot.forEach((doc) =>
                lemonadeData.push({ ...doc.data(), id: doc.id })
            );
            setLemonade(lemonadeData);
        });
    }, []);

// Redux

    const increment1 = () => ({ type: 'INCREMENT1'});
    const increment2 = () => ({ type: 'INCREMENT2'});

    const countReducer = (profit = 0, action) => {
        if (action.type === 'INCREMENT1') { return profit + 10;}
        if (action.type === 'INCREMENT2') { return profit + 15;}
        return profit;
    };

    const store = createStore(countReducer);

    function render(){
        document.getElementById("value").innerHTML = store.getState();
    }

    store.subscribe(render);

    function executeClick(lemonade){

        switch(lemonade.name){
            case('lemonade1'): {
                console.log(lemonade.name)
                store.dispatch(increment1())
                store.subscribe(render);
                break;
            }
            case('lemonade2'): {
                console.log(lemonade.name)
                store.dispatch(increment2())
                store.subscribe(render);
                break;
            }

        }

    }



    return (

        <div class={styles.container}>
            <h1>We have two types of lemonades: </h1>
            {lemonade.map((lemonade, index) => (
                <div key={index}>
                    <div class="my-card">
                        <h4>{lemonade.name}</h4>
                    </div>
                    <h4 className={styles.price}>{lemonade.price} Dkk</h4>
                    <Button variant="mybutton" onClick={() => executeClick(lemonade)}>BUY</Button>
                </div>
            ))}

            <div>
                <h1 style={{marginTop: '150px', color: 'black'}}>Current profit: <span className={styles.profit} id="value">0</span> Dkk</h1>
            </div>
        </div>
    )
}


export default GetLemonade;
