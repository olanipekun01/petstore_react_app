import React, { Component } from 'react';
import '../styles/ShopPage.css';

class ShopPage extends Component {

    // state = {
    //     data: true,
    //     filter: true,
    //     loading: false,
    //     componentMounted: true
    // };

    // componentDidMount() {
    //     // this method is called after our component is rendered into the Dom
    //     // and its the perfect place to make ajax calls to get data from the server
    
    //     // Ajax call
    //     // this.setState({ movies })

    //     const getProducts = async () => {
    //         this.setState({ loading: true });
    //         const response = await fetch("https://fakestoreapi.com/products");

    //         if(componentMounted) {
    //             this.setState({ 
    //                 data: await response.clone().json(), 
    //                 filter: await response.json(),
    //                 loading: false
    //             });

    //             console.log(filter);
    //         };

    //         return () => {
    //             this.setState({ componentMounted: false });
    //         }
    //     }
    
    //     console.log('App - Mounted');
    // }

    render() {
        return (
            <main className="shop_page_landing_hero">
            <section className="shop_section">
                <h2 className="shop_section_header">ALL</h2>
                <h4 className="shop_section_sub_header">PETSTORE Users' favorites.</h4>
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
                            <img src="../asset/dog20.jpg" alt="" />
                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog21.jpg" alt="" />
                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog22.jpg" alt="" />
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
                    <div className="card">
                        <figure>
                            <img src="../asset/dog20.jpg" alt="" />
                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog21.jpg" alt="" />
                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img src="../asset/dog22.jpg" alt="" />
                            </figure>
                        <div className="card_wrapper">
                            <p className="item_title">Bull Dog</p>
                            <div className="item_price">$540</div>
                             {/* <button className="add_to_cart_button">Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop_nav_numbers">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href=""></a>
            </section>



        </main>
        );
    };
};

export default ShopPage;