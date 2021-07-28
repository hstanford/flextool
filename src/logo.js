import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSignOutAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import logo from '../assets/logo.png';

function loadingSpinner () {
    return (
        <FontAwesomeIcon icon={faSpinner} fixedWidth className="fa-spin"/>
    );
}

class Logo extends Component{
    constructor(props) {
        super(props);

        this.toggleActive = this.toggleActive.bind(this);
        this.parent = props.parent;
        this.state = {
            active: false,
            user: loadingSpinner(),
        };
        this.getUser();
    }
    getUser() {
        fetch('http://' + window.location.host + '/api/users')
            .then(res => res.json())
            .then(res => this.setState({ user: res.value?.name || (<FontAwesomeIcon icon={faExclamationTriangle} fixedWidth/>) }))
            .catch(() => this.setState({ user: (<FontAwesomeIcon icon={faExclamationTriangle} fixedWidth/>) }));
    }
    toggleActive() {
        this.setState({ active: !this.state.active });
    }
    render(){
        return(
            <div className={'logo' + (this.state.active ? ' active' : '')} onClick={this.toggleActive}>
                <img className="logo" alt='logo' src={String(logo)} />
                <div className="menu">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faUser} fixedWidth className="menu-item-icon"/>
                        {this.state.user}
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faSignOutAlt} fixedWidth className="menu-item-icon"/>
                        Log Out
                    </div>
                </div>
            </div>
        );
    }
}
export default Logo;
