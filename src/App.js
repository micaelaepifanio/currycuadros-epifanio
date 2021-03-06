import './App.css';
import NavBar from './components/navbar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting = "Catálogo" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting = "Catálogo" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer id = "" />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
