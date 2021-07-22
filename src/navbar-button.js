import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavbarButton extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.onClickPropagate = this.onClickPropagate.bind(this);
    }
    onClickPropagate() {
        this.parent.toggleActive(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    render(){
        return(
            <div className={'navbar-button ' + this.subtype + (this.state.active ? ' selected': '')} onClick={this.onClickPropagate}>
            <FontAwesomeIcon icon={this.icon} fixedWidth/>
            </div>
        );
    }
}
export default NavbarButton;
