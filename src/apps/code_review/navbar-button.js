import React from 'react';
import './styles.css';
import NavbarButton from '../../navbar-button.js';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import Page from './page.js';

class CRNavbarButton extends NavbarButton {
    constructor(props) {
        super(props);
        this.page = Page;
        this.subtype = 'code_review_nbb';
        this.icon = faCodeBranch;
    }
}
export default CRNavbarButton;
