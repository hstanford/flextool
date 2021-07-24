import React, { Component } from 'react';
import './src/styles.css';
import Navbar from './src/navbar.js';
import EmptyPage from './src/empty-page.js';

class App extends Component{
    constructor (props) {
        super(props);
        this.state = {
            currentPage: EmptyPage,
        }
    }
    updatePage (page) {
        this.setState({
            currentPage: page || EmptyPage,
        });
    }
    render(){
        return(
            <div className='app'>
                <Navbar parent={this}/>
                <this.state.currentPage/>
            </div>
        );
    }
}
export default App;
