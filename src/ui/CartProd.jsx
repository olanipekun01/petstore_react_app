import React from 'react';

function CartProd(props) {
    return ( 
        <div className="cart_prod">
            <img src="../asset/dog10.jpg" alt=".." className="cart_prod_img" />
            <div className="name_and_remove_div">
                <div className="cart_prod_name">{props.item.title}</div>
                <div className="cart_prod_size">3kg</div>
                <a href="#" className="remove">Remove</a>
            </div>
            
            {/* <input  className="cart_prod_quantity">1</div>  */}
            <div className="cart_prod_quantity" id="">
                <button className="increase_quantity" onClick={() => {props.handleIncrement(props.item)}}>+</button>
                <span className="item_quantity">{props.value}</span>
                <button className="decrease_quantity" onClick={() => {props.handleDecrement(props.item)} }>-</button> 
            </div>
            <div className="cart_prod_price">$150</div>

            
        </div>
     );
}

export default CartProd;