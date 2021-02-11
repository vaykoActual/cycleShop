import "./App.css";
import Home from "./screens/Home/Home";
import React, { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import { Route, Switch, Redirect } from "react-router-dom";
import { getMotorcycles } from "./services/products";
import Brand from "./screens/Brand/Brand";

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
        <Route path="/brand/Harley Davidson">
          <Brand user={user} products={products} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
