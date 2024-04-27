import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
