import React, { Component } from 'react';
import AppTemplate from '../../app-template.js';
import NavbarButton from './navbar-button.js';
import './styles.css';

class App extends AppTemplate {
    constructor (opts) {
        super(opts);
    }
    static nbb = NavbarButton;
}

export default App;
