import React, { Component } from 'react';
import '../styles/CartPage.css';
import CartProd from '../ui/CartProd';

class CartPage extends Component {
    render() {
        console.log('props', this.props.items);
        return (
            <main className="cart_page_landing_hero">
            <section className="cart_section">
                <h2 className="cart_section_header">Your Cart</h2>

                <div className="cart_wrapper">
                    <div className="cart_wrapper_head">
                        <h4 className="quantity">Quantity</h4>
                        <h4 className="total">Total</h4>
                    </div>
                        <hr/>
                        {this.props.items.map( item => (
                            <CartProd key={item.id} 
                            item={item} 
                            handleIncrement={this.props.handleIncrement}
                            handleDecrement={this.props.handleDecrement}
                            value={item.value}
                            />
                        ))}
                        <div className="cart_prod">
                            <img src="../asset/dog10.jpg" alt=".." className="cart_prod_img" />
                            <div className="name_and_remove_div">
                                <div className="cart_prod_name">Fresh Element Mini Pro</div>
                                <div className="cart_prod_size">3kg</div>
                                <a href="#" className="remove">Remove</a>
                            </div>
                            
                           {/* <input  className="cart_prod_quantity">1</div>  */}
                           <div className="cart_prod_quantity" id="">
                                <span className="increase_quantity">+</span>
                                <span className="item_quantity">150</span>
                                <span className="decrease_quantity">-</span> 
                            </div>
                            <div className="cart_prod_price">$150</div>

                            
                        </div>

                        <div className="cart_prod">
                            <img src="../asset/dog10.jpg" alt=".." className="cart_prod_img" />
                            <div className="name_and_remove_div">
                                <div className="cart_prod_name">Fresh Element Mini Pro</div>
                                <div className="cart_prod_size">3kg</div>
                                <a href="#" className="remove">Remove</a>
                            </div>
                            
                           {/* <input  className="cart_prod_quantity">1</div> */}
                           <div className="cart_prod_quantity" id="">
                                <span class="increase_quantity">+</span>
                                <span className="item_quantity">150</span>
                                <span class="decrease_quantity">-</span>
                            </div>
                            <div className="cart_prod_price">$150</div>
                            
                        </div>

                        <hr/>
                        <div className="subtotal_div">
                            <div className="subtotal">Subtotal</div>
                            <div className="subtotal_price">$300</div>
                        </div>
                        <div className="shipping_note">Taxes and <a>shipping</a> calculated at checkout</div>
                        <div className="update_checkout_button">
                            <input type="button" value="Update Cart" className="btn update_cart" />
                            <input type="button" value="Checkout" className="btn checkout_button" />
                        </div>
                        <div className="paypal_btn">
                            <input type="button" value="Paypal" className="paypal_link" />
                        </div>
                </div>

            </section>
        </main>
        );
    }
};


export default CartPage;