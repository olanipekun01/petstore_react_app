import React, { Component } from 'react';
import '../styles/LandingPage.css';
import Item from '../ui/Item';

class LandingPage extends Component {
    state = {
        imageUrl : "../asset/dog23.jpg",
        item : [
            {id:1, title:"Bull Dog1", price:54, img:"../asset/dog19.jpg"},
            {id:2, title:"Bull Dog2", price:54, img:"../asset/dog19.jpg"},
            {id:3, title:"Bull Dog3", price:54, img:"../asset/dog19.jpg"},
            {id:4, title:"Bull Dog4", price:54, img:"../asset/dog19.jpg"},
            {id:5, title:"Bull Dog5", price:54, img:"../asset/dog19.jpg"},
            {id:6, title:"Bull Dog6", price:54, img:"../asset/dog19.jpg"},
            {id:7, title:"Bull Dog7", price:54, img:"../asset/dog19.jpg"},
            {id:8, title:"Bull Dog8", price:54, img:"../asset/dog19.jpg"},
            {id:9, title:"Bull Dog9", price:54, img:"../asset/dog19.jpg"},
            {id:10, title:"Bull Dog10", price:54, img:"../asset/dog19.jpg"},
            {id:11, title:"Bull Dog11", price:54, img:"../asset/dog19.jpg"}
        ]
    };
    render() {
        console.log(this.state.item);
        return (
            <main class="landing_hero">
                <section class="first_section">
                    <div class="left_container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div class="first_section_header">Lorem Ipsum</div>
                        <button class="shop_now_button">SHOP NOW</button>
                    </div>

                    <figure class="right_container">
                        <img src={this.state.imageUrl} alt="" />
                    </figure>
                </section>


                <section className="second_section">
                    <div className="card_div third_card_div">
                        <div 
                        // style={ { background: "url('../asset/dog18.jpg') center center no-repeat" }} 
                        className="card">
                             {/* <figure>
                                <img src="../asset/dog18.jpg" alt="" className="clean_cat_img">
                                <div><a href="" className="clean_link clean_cat_text">Clean</a></div>
                            </figure>  */}
                            <a href="" className="clean_link clean_cat_text">Clean</a>
                        </div>
                        <div className="card">
                             {/* <figure>
                                <img src="../asset/dog19.jpg" alt="" className="feed_cat_img">
                                <div><a href="" className="feed_link feed_cat_text">Feed</a></div>
                            </figure>  */}
                            <a href="" className="feed_link feed_cat_text">Feed</a>
                        </div>
                        <div className="card">
                             {/* <figure>
                                <img src="../asset/dog19.jpg" alt="" className="housing_cat_img">
                                <div><a href="" className="housing_link housing_cat_text">Housing</a></div>
                            </figure>  */}
                            <a href="" className="housing_link housing_cat_text">Housing</a>
                        </div>
                        <div className="card">
                             {/* <figure>
                                <img src="../asset/dog20.jpg" alt="" className="pets_cat_img">
                                <div><a href="" className="pets_link pets_cat_text">Pets</a></div>
                            </figure>  */}
                            <a href="" className="pets_link pets_cat_text">Pets</a>
                        </div>
                        <div className="card">
                             {/* <figure>
                                <img src="../asset/dog21.jpg" alt="" className="services_cat_img">
                                <div><a href="" className="services_link services_cat_text">Services</a></div>
                            </figure>  */}
                            <a href="" className="services_link services_cat_text">Services</a>
                        </div>
                    </div>
                </section>

                <section className="third_section">
                    <h2 className="third_section_header">OUR PICKS</h2>
                    <div className="card_div">
                            {this.state.item.map( (item) => (
                                <Item item={item} id={item.id} key={item.id} />
                            ))}

                    </div>
                </section>

                <section className="fourth_section">
                    <h2 className="subscribe_header">Subscribe to our newsletter</h2>
                    <p className="subscribe_content">Promotions, new products and sales. Directly to your inbox.</p>
                    <div className="input_field">
                        <input className="subscribe_email" type="email" name="" id="" />
                        <button className="subscribe_button">Subscribe</button>
                    </div>
                </section>


            </main>
        );
    };
};

export default LandingPage;