import "./App.css";
import Home from "./screens/Home/Home";
import React, { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import { Route, Switch, Redirect } from "react-router-dom";
import { getMotorcycles } from "./services/products";
import Brand from "./screens/Brand/Brand";
import MotorcycleDetail from "./screens/MotorcycleDetail/MotorcycleDetail"
import MotorcycleEdit from "./screens/MotorcycleEdit/MotorcycleEdit";
import MotorcycleSell from "./screens/MotorcycleSell/MotorcycleSell";
import Contact from "./screens/Contact/Contact";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    const fetchMotorcycles = async () => {
      const motorcycles = await getMotorcycles();
      setProducts(motorcycles);
    };
    fetchMotorcycles();
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home user={user} products={products} />
        </Route>
        <Route path="/brand/:id">
          <Brand user={user} products={products} />
        </Route>
        <Route path="/manage/:id">
          <MotorcycleDetail />
        </Route>
        <Route path="/motorcycleedit/:id" >
          <MotorcycleEdit user={user} products={products} />
        </Route>
        <Route path="/sell">
          <MotorcycleSell user={user} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
