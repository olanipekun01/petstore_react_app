import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
    state={}
    render() {
        return (
            <React.Fragment>
                <footer className="footer_section">
                    <div className="footer_card_wrapper">
                        <div className="first_footer_card">
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Privacy Policy</a>
                        </div>

                        <div className="second_footer_card">
                            <a href="#">Price Match Policy</a>
                            <a href="#">Shipping & Returns</a>
                            <a href="#">FAQ</a>
                        </div>

                        <div className="third_footer_card">
                            <div className="socials">
                                <img src="" alt="" className="social_icon" />
                                <div className="social_text">Facebook</div>
                            </div>

                            
                            <div className="socials">
                                <img src="" alt="" className="social_icon" />
                                <div className="social_text">Twitter</div>
                            </div>

                            
                            <div className="socials">
                                <img src="" alt="" className="social_icon" />
                                <div className="social_text">Instagram</div>
                            </div>

                            
                            <div className="socials">
                                <img src="" alt="" className="social_icon" />
                                <div className="social_text">Youtube</div>
                            </div>


                        </div>

                        <div className="fourth_footer_card">
                            <p>&copy;2022, PETSTORE NG</p>
                        </div>
                    </div>
                    


                </footer>
            </React.Fragment>
        );
    };
};

export default Footer;