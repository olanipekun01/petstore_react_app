import React, { Component } from 'react';
// import './Item.css';

function Item(props) {
    return (
        <div className="card">
            <figure>
                <img src={props.item.img} alt="" />
            </figure>
            <div className="card_wrapper">
                <p className="item_title">{props.item.title}</p>
                <div className="item_price">{props.item.price}</div>
                {/* <button className="add_to_cart_button">Add to Cart</button>  */}
            </div>
        </div>  
    );
}

export default Item;