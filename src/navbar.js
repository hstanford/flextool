import React, { Component } from 'react';

import Logo from './logo.js';

/* Particular Apps */
import AnnualLeave from './apps/annual_leave/navbar-button.js';
import CodeReview from './apps/code_review/navbar-button.js';

class Navbar extends Component{
    constructor(props) {
        super(props);

        this.parent = props.parent;
        this.state = {
            currently_selected: null,
        };
    }
    toggleActive(child) {
        if (this.state.currently_selected === child) {
            child.toggleClass();
            this.state.currently_selected = null;
            return this.parent.updatePage();
        }

        if (this.state.currently_selected)
            this.state.currently_selected.toggleClass();

        child.toggleClass();
        this.state.currently_selected = child;
        this.parent.updatePage(child.page);
    }
    render(){
        return(
            <div className="navbar">
                <Logo parent={this} />
                <AnnualLeave parent={this}/>
                <CodeReview parent={this}/>
            </div>
        );
    }
}
export default Navbar;
