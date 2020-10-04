import React, {useState, useEffect} from 'react';
import firebaseConfig from '../firebaseConfig';
import 'firebase/firestore';
import {createStore} from 'redux';

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
        <div className="container">
            <h1>We have two types of lemonade: </h1>
            {lemonade.map((lemonade, index) => ( 
                <div key={index}>
                     <h1>{lemonade.name}</h1>
                <h1>{lemonade.price}$</h1>
                <button onClick={() => executeClick(lemonade)}>BUY</button>
                </div>
            ))}

            <div>
                <h1>Current profit: <span id="value">0</span>$</h1>
            </div>
        </div>
    )
}


export default GetLemonade;