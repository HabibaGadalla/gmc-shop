import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { Navbar } from "./Components/Navbar";

import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "./Components/ProductCard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(!isLoggedIn);
  const productsList = [
    {
      name: "product 1 to7fa",
      id: 1,
    },
    {
      name: "product 2 ",
      id: 2,
    },
    {
      name: "product 3 normal",
      id: 3,
    },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      </div>
      <Switch>
        <Route path="/category">
          <div>
            <h2>here category</h2>
          </div>
        </Route>
        <Route exact path="/products">
          <Product products={productsList} />
        </Route>
        <Route path="/products/:id" >
          <ProductCard products={productsList} />
        </Route>

        <Route path="/admin">
          {!isLoggedIn ? <Redirect to="/" /> : <h2> admin page</h2>}
        </Route>
        <Route exact path="/" component={Home} />

        <Route>
          <h1> OPSS bet3mel ayh hena?</h1>{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
