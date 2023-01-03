import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import NavBar from './NavBar';

class Header extends Component {
    state = {
        display: false
    }

    toggle = () => {
        this.setState({ display: !this.state.display});
        console.log(this.state.display);
    };

    render() {
        return (
            <React.Fragment>
                <section className="info_header">
                <p className="info_header_text">PURA MAX+Refill Bottles (4 bottles)+Trash Bags(4) (restocked!) / FREE 30 DAYS RETURN</p>
                </section>

                <header className="landing_header_section">
                    <div className="landing_logo">PETSTORE</div>
        
                    <nav className="landing-navbar">
                        <a href="#" className="home_link"><Link className="nav_link" to="/">HOME</Link></a>
                        <a href="#" onClick={this.toggle} className="shop_link"><Link className="nav_link" to="/shop">Shop</Link></a>
                        <a href="#" className="featured_link"><Link className="nav_link" to="/feature">Featured</Link></a>
                        <a href="#" className="about_link"><Link className="nav_link" to="/about">About</Link></a>
                    </nav>
        
                    <div className="landing_header_icon">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </header>
        

                {this.state.display && <NavBar/>}
            </React.Fragment>
        );
    };
};

export default Header;