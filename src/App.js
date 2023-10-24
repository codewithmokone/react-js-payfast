import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PaymentSuccess from './pages/PaymentSuccess';
import Cancel from './pages/Cancel';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/PaymentSuuccess" element={ <PaymentSuccess/> } />
      <Route path="/Cancel" element={ <Cancel/> } />
    </Routes>
  </div>
  )
}

export default App;
