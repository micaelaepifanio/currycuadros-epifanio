import './App.css';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting = "Catalogo TBD"> </ItemListContainer>
      </header>
    </div>
  );
}

export default App;
