import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import FilterBlock from './Components/FilterBlock';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <FilterBlock/>
      <Product/>
    </div>
  );
}

export default App;
