import React, {useState, useEffect} from 'react';
import firebaseConfig from '../firebaseConfig';
import 'firebase/firestore';
import { createStore } from 'redux';

function GetLemonade() {

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
      }, []); // GET from firebase
  console.log(lemonade);

    var numberofLemonade1 = 10;
    var numberofLemonade2 = 10;
    var profit = 0;

    /* Actions
    const buy = () => ({ type: 'BUY'}); //increment action - without payload
    const decrement = () => ({ type: 'DECREMENT'}); //decrement action - without payload
    const price = () => ({type: 'LEMONADE'}); 

    // Reducers
    const countReducer = (profit = 0, action) => {

        if (action.type === 'BUY') {
            if (lemonade.name === 'lemonade1') {
               return numberofLemonade1 - 1 && profit + 10;
            } 
            else if (lemonade.name === 'lemonade2') {
                return numberofLemonade2 - 1 && profit + 15;
            } 
        }
    };

    //Store
   // const store = Redux.createStore(countReducer); */

    return (
        <div className="container">
            <h1>We have two types of lemonade: </h1>
            {lemonade.map((lemonade, index) => ( 
                <div key={index}>
                     <h1>{lemonade.name}</h1>
                <h1>{lemonade.price}$</h1>
                <button onClick="store.dispatch(buy())">BUY</button>
                </div>
            ))}

            <div>
                <h2>Inventory</h2>
                <h1>Lemonade1: {numberofLemonade1}</h1>
                <h1>Lemonade2: {numberofLemonade2}</h1>

                <h2>Profit: {profit}</h2>
            </div>
        </div>
    )
}


export default GetLemonade;