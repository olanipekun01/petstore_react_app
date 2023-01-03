import React, { Component } from 'react';
import '../styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
        

                <div className="drop_down">
                    <ul>
                        <li><a href="" className="clean_link">Clean</a></li>
                        <li><a href="" className="feed_link">Feed</a></li>
                        <li><a href="" className="housing_link">Housing</a></li>
                        <li><a href="" className="pet_link">Pets</a></li>
                        <li><a href="" className="services_link">Services</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    };
};

export default NavBar;