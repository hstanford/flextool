import React from 'react';
import NavbarButton from '../../navbar-button.js';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class CRNavbarButton extends NavbarButton {
    constructor(props) {
        super(props);
        this.subtype = 'code_review_nbb';
        this.icon = faCodeBranch;
    }
}
export default CRNavbarButton;
