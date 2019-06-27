import React from "react";
import logo from "./logo.svg";
import "./App.css";


//import Components
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Product from "./components/Product"
import Footer from "./components/Footer"

//import Data
import ManHinh from "./Data/ProductData1"

function App() {
  //jsx
  // constructor(this.props)
  // {
  //   super(this.props);
  //   this.state = {
  //     spInfo : Product
  //   }
  // }
  // console.log(this.state.spInfo);
  return (
    <div className="App">
      <Header />
      <Carousel />
      <section className="sp-so">
        <div className="container">
        <div className="row mt-4">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          </div>
        </div>
      </section>






      <Footer></Footer>


    </div>


  );
}

export default App;
//video 2-9

