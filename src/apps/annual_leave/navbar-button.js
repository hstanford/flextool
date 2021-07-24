import React from 'react';
import './styles.css';
import NavbarButton from '../../navbar-button.js';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import Page from './page.js';

class ALNavbarButton extends NavbarButton {
    constructor(props) {
        super(props);
        this.page = Page;
        this.subtype = 'annual_leave_nbb';
        this.icon = faCalendarCheck;
    }
}
export default ALNavbarButton;

