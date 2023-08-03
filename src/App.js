// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Mobile from './Components/Mobile';
import Shop from './Components/Shop';
import Home from './Components/Home';
import Tvav from './Components/Tvav';
import HomeApp from './Components/HomeApp';
import Laptops from './Components/Laptops';
import Display from './Components/Display';
import Acc from './Components/Acc';
import St from './Components/St';
import Support from './Components/Support';
import Fb from './Components/Fb';
import Samsung from './Components/Samsung';
import Searchbox from './Searchbox';
import Cart from './Components/Cart';
import Account from './Components/Account';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/tv' element={<Tvav />} />
          <Route path='/homeapp' element={<HomeApp />} />
          <Route path='/laptop' element={<Laptops />} />
          <Route path='/display' element={<Display />} />
          <Route path='/acc' element={<Acc />} />
          <Route path='/sm' element={<St />} />
          <Route path='/support' element={<Support />} />
          <Route path='/fb' element={<Fb />} />
          <Route path='/search' element={<Searchbox />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      
    </div>
  );
}

export default App;
