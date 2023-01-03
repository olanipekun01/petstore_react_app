import React, { Component } from 'react';
import '../styles/ProductPage.css';

class ProductPage extends Component {
    render() {
        return (
            <main className="product_page_landing_hero">
            <section className="first_section">
                <figure>
                    <img src="../asset/dog1.jpg" alt="" className="product_image product_image_one"/>

                    <div className="other_product_image">
                        <img src="../asset/dog2.jpg" alt="" className="product_image_two sub_img" />
                        <img src="../asset/dog3.jpg" alt="" className="product_image_three sub_img" />
                        <img src="../asset/dog4.jpg" alt="" className="product_image_four sub_img" />
                        <img src="../asset/dog5.jpg" alt="" className="product_image_five sub_img" />
                        <img src="../asset/dog3.jpg" alt="" className="product_image_three sub_img" />
                        <img src="../asset/dog4.jpg" alt="" className="product_image_four sub_img" />
                        <img src="../asset/dog5.jpg" alt="" className="product_image_five sub_img" />
                    </div>
                </figure>


            </section>

            <section className="second_section">
                <h4 className="petstore_header">PETSTORE</h4>
                <h1 className="product_header_name">Eversweet Pro</h1>
                <div className="product_price">$79.99</div>
                <div className="shipping_note">Taxes and <a>shipping</a> calculated at checkout</div>
                <div className="product_quantity">Quantity <input type="number" name="" id="" className="product_quantity_input"/></div>
                <input type="button" value="Add to Cart" onClick={() => {this.props.handleCart()}} className="btn add_to_cart_button" />
                <input type="button" value="Buy it now" className="btn buy_it_now_button" />

                <div className="product_description">
                    <ul>
                        <li>PETKIT stainless steel automatic pet water fountain with wireless pump (with power line)</li>
                        <li>61 oz/1.8L</li>
                        <li>195*195*148 mm</li>
                        <li>The innovative wireless pump is designed with a hassle-free structure, extremely safe, and easy to clean when topping up water. 
                            It cancels any exposed wires to eliminate electrical leakage.</li>
                        <li>Easy to clean due to the wireless design. The wireless water pump and the main unit can be washed separately.</li>
                        <li>PETKIT stainless steel automatic pet water fountain with wireless pump (with power line)</li>
                        <li>61 oz/1.8L</li>
                        <li>195*195*148 mm</li>
                        <li>The innovative wireless pump is designed with a hassle-free structure, extremely safe, and easy to clean when topping up water. 
                            It cancels any exposed wires to eliminate electrical leakage.</li>
                        <li>Easy to clean due to the wireless design. The wireless water pump and the main unit can be washed separately.</li>
                   </ul>
                </div>

            </section>

            <section className="third_section">
                <h2 className="third_section_header">You may like</h2>
                <div className="card_div">
                    <div className="card">
                        <figure>
                            <img src="../asset/dog18.jpg" alt="" />

                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog19.jpg" alt="" />

                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog19.jpg" alt="" />

                        </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>

                </div>
            </section>
        </main>
        );
    };
};

export default ProductPage;