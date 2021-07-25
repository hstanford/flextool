import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Cal (props) {
    const [ value, onChange ] = useState(new Date());
    const upd = (val) => {
        props.getSelected(val);
        return onChange(val);
    };
    return(
        <div className='calendar' onMouseMove={props.onMouseMove}>
            <Calendar
                onChange={upd}
                value={value}
                selectRange={props.shift}
            />
        </div>
    );
}

class Page extends Component {
    constructor (opts) {
        super(opts);
        this.state = {
            shiftDown: false,
            selectionMessage: '',
        };
        this.handleMM = this.handleMM.bind(this);
        this.getSelected = this.getSelected.bind(this);
    }
    render(){
        return(
            <div className='page'>
                <Cal onMouseMove={this.handleMM} shift={this.state.shiftDown} getSelected={this.getSelected}/>
                <div className='cal-selection'>{this.state.selectionMessage}</div>
            </div>
        );
    }
    handleMM (event) {
        if (event.shiftKey !== this.state.shiftDown) {
            this.setState({
                shiftDown: event.shiftKey,
            });
        }
    }
    getSelected (dates) {
        if (!Array.isArray(dates))
            dates = [dates];

        this.setState({
            selectionMessage: `Selected from ${dates[0]?.toDateString?.()} to ${dates[dates.length - 1]?.toDateString?.()}`,
        });
    }
}
export default Page;
