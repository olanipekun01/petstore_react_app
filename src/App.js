import './App.css';
import Header from "./layout/Header"
// import SideBar from "./layout/SideBar"
import Hero from "./layout/Hero"
// import Test from './layout/test';
import Footer from './layout/Footer';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import CartPage from './component/CartPage';
import FeaturePage from './component/FeaturePage';
import LoginRegister from './component/LoginRegister';
import ProductPage from './component/ProductPage';
import ShopPage from './component/ShopPage';

function App() {
    let item = [
        {id:1, title:"Bull Dog1", price:54, img:"../asset/dog19.jpg", value:1},
    ];

    let [cart, setCart] = useState(item);


    let handleCart = () => {
        let carts = [...cart];
        console.log("carts", carts);
        carts.push({id:2, title:"Bull Dog2", price:54, img:"../asset/dog19.jpg", value:1})
        item = carts
        setCart(carts);
    } 
    
    useEffect(() => {
        setCart(item);
    })

    let handleIncrement = (item) => {
    // console.log("clicked");
      // console.log(counter);
      const carts = [...cart];
      const index = carts.indexOf(item);
      carts[index] = {...item};
      carts[index].value++;
      setCart(carts);
      console.log(cart[index].value) ;    
  };

  let handleDecrement = (item) => {
        console.log('decrement');
      const carts = [...cart];
      const index = carts.indexOf(item);
      carts[index] = {...item};
      carts[index].value--;
      setCart(carts);
      console.log(cart[index].value);
  }


  return (
    <div className="App">
      {/* <Test /> */}
     
      {/* <Hero /> */}

      <React.Fragment>





      <Router>
      <Header />
                    <Routes>

                        <Route path='/' element={<LandingPage />} />
                        <Route path='/cart' element={<CartPage items={cart}
                         handleIncrement={handleIncrement}
                         handleDecrement={handleDecrement}
                         />} /> 


                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/product' element={<ProductPage handleCart={handleCart} />} />

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
                   <Footer />
                </Router>
      </React.Fragment>

      
    </div>
  );
}

export default App;
