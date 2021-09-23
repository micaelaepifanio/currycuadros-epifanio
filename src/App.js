import './App.css';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
