import React, { Component } from 'react';
import '../styles/LoginRegister.css';

class LoginRegister extends Component {
    render() {
        return (
            <main className="login_register_landing_hero">
                <div className="my_account_header">My Account</div>
                <section className="first_section">
                    <div className="login_header head_text">LOGIN</div>
                    <fieldset className="login_fieldset">
                        <label for="email" className="login_email_label label">Email <span>*</span></label>
                        <input type="email" name="" className="login_email_input input" id="" />
                        <label for="password" className="login_password_label label">Password <span>*</span></label>
                        <input type="password" name="" className="login_password_input input" id="" />
                        <div className="forget_password">Forgot your password?</div>
                        <input type="button" value="Sign In" className="login_button btn" />
                    </fieldset>

                    
                </section>

                <section className="second_section">
                    <div className="register_header head_text">REGISTER</div>
                    <fieldset className="register_fieldset">
                        <label for="firstname" className="register_firstname_label label">First Name</label>
                        <input type="text" name="" className="register_firstname_input input" id="" />
                        <label for="lastname" className="register_lastname_label label">Last Name</label>
                        <input type="text" name="" className="register_lastname_input input" id="" />
                        <label for="email" className="register_email_label label">Email <span>*</span></label>
                        <input type="email" name="" className="register_email_input input" id="" />
                        <label for="password" className="register_password_label label">Password <span>*</span></label>
                        <input type="password" name="" className="register_password_input input" id="" />
                        <input type="button" value="Register" className="register_button btn" />
                    </fieldset>
                    

                </section>
            </main>

        );
    };
};

export default LoginRegister;