import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import ProtectedRoutes from './services/ProtectedRoutes'
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
// import Product from "./components/products/product/Product";
import Everything from "./components/everything/Everything";
import Groceries from "./components/everything/Groceries";
import ProductDetail from "./components/products/productDetail/ProductDetail";
import { useState } from "react";
import Checkout from "./components/checkout/Checkout";
import Juice from "./components/everything/Juice"
import COD from "./components/COD";
import Form from "./components/checkout/Form";
import { useEffect } from "react";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Online from "./components/Online";
import Success from "./components/Success";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";



const App = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  // console.log(cart)
  // console.log(cart.length)


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} 
      closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      
      <Navbar cart={cart} />
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <ProtectedRoutes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/product" component={Product} /> */}
          <Route path="/everything" exact component={Everything} />
          <Route path="/Groceries" component={Groceries} />
          <Route path="/juice" component={Juice}/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/success" component={Online} />
          <Route path="/billingDetails"><Form setCart={setCart}/></Route>
          <Route path="/online" ><Success setCart={setCart}/></Route>
          <Route path="/codsuccess"><COD setCart={setCart}/></Route>
          <Route path="/cart"><Cart cart={cart} setCart={setCart} /></Route>
          <Route path="/productDetail/:id">
          <ProductDetail setCart={setCart} cart={cart} count={count} setCount={setCount}/>
        </Route>
        </ProtectedRoutes>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
