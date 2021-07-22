import React, { Component } from 'react';

/* Particular Apps */
import ALNavbarButton from './apps/annual_leave/navbar-button.js';
import CRNavbarButton from './apps/code_review/navbar-button.js';

import logo from '../assets/logo.png';

class Navbar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            currently_selected: null,
        };
    }
    toggleActive(child) {
        if (this.state.currently_selected)
            this.state.currently_selected.toggleClass();

        child.toggleClass();
        this.state.currently_selected = child;
    }
    render(){
        return(
            <div className="navbar">
                <img className="logo" alt='logo' src={String(logo)} />
                <ALNavbarButton parent={this}/>
                <CRNavbarButton parent={this}/>
            </div>
        );
    }
}
export default Navbar;
