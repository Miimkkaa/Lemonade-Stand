import React, {useState}from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';

function MainPage() {

    return (
        <div class="container">
            <h1 class="title">Are you thirsty?</h1>
            <h4>picture?</h4>
            <button
            class = "btn"
            > <Link to="/getLemonade">See catalog</Link></button>
        </div>
    )
}

export default MainPage;