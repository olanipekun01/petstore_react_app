import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../component/LandingPage';
import CartPage from '../component/CartPage';
import FeaturePage from '../component/FeaturePage';
import LoginRegister from '../component/LoginRegister';
import ProductPage from '../component/ProductPage';
import ShopPage from '../component/ShopPage';

class Hero extends Component {
    

    // addToCart = () => {
    //     this.setState({cart: })
    // };
    render() {
        console.log(this.state.cart);
        return (
            <React.Fragment>
                <Router>
                    <Routes>

                        <Route path='/' element={<LandingPage />} />
                        <Route path='/cart' element={<CartPage items={this.state.cart} />} /> 


                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/product' element={<ProductPage />} />

                        <Route path='/feature' element={<FeaturePage />} />
                        <Route path='/login_register' element={ <LoginRegister />} />
                        {/* <Route path="/">
                            <LandingPage />
                        </Route> */}

                        {/* <Route path="/cart">
                            <CartPage />
                        </Route> */}

                        {/* <Route path="/feature">
                            <FeaturePage />
                        </Route> */}

                        {/* <Route path="/login_register">
                            <LoginRegister />
                        </Route> */}

                        {/* <Route path="/product">
                            <ProductPage />
                        </Route> */}

                        {/* <Route path="/shop">
                            <ShopPage />
                        </Route> */}
                   </Routes>
                </Router>
               
            </React.Fragment>
        );
    };
};

export default Hero;