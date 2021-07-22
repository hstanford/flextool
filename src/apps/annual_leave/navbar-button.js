import React from 'react';
import NavbarButton from '../../navbar-button.js';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

class ALNavbarButton extends NavbarButton {
    constructor(props) {
        super(props);
        this.subtype = 'annual_leave_nbb';
        this.icon = faCalendarCheck;
    }
}
export default ALNavbarButton;

