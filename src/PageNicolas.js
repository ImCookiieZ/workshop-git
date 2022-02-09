import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

var g_glacon;
var g_quote;
var first = 1;
function PageNicolas() {
    const [glacon, setGlacon] = useState({});
    const [quote, setQuote] = useState({});

    if (first) {
        axios({ method: 'get', url: 'https://glacompagnie-api.herokuapp.com/api/v1/glacons?slug=monke&single=true' }).then((res) => {
            setGlacon(res.data);
        });
        g_glacon = glacon;

        axios({ method: 'get', url: 'https://gen.software/quote/' }).then((res) => {
            setQuote(res.data);
        });
        g_quote = quote;
        first = 0;
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <p>Nicolas</p>
                <img src={g_glacon.header} alt='logo' />
                <p>{g_glacon.name}</p>
                <p>{g_glacon.description}</p>
                <p>
                    {g_glacon.price}€ -- {g_glacon.quantity}
                </p>
                <p>{g_quote.quote}</p>
            </header>
        </div>
    );
}

export default PageNicolas;
