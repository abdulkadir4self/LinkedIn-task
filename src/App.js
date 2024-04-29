import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router';
import ProtectedRoute from './component/ProtectedRoute';
import Grants from './pages/Grants/Grants';
import Resources from './pages/Resources/Resources';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
                <Route path='/' element={ <ProtectedRoute component={Home}/> }  />
                <Route path='/grants' element={ <ProtectedRoute component={Grants}/> }  />
                <Route path='/resources' element={ <ProtectedRoute component={Resources}/> }  />


      </Routes>
    </div>
  );
}

export default App;
