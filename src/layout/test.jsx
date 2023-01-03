import React, { Component } from 'react';
// import '../styles/Header.css';
// import NavBar from './NavBar';

class Test extends Component {
    constructor () {
        super();
        this.state = {
            display: false
        }
    }

    toggle = () => {
        this.setState({ display: !this.state.display})
    };

    render() {
        return (
            <React.Fragment>
            {this.state.display && <p>Show hide, and toggle</p>}
            <button onClick={this.toggle}>Show</button>
                
            </React.Fragment>
        );
    };
};

export default Test;