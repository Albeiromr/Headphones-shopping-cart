import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import logo from './Assets/Img/Logo/logosound.png'
import Products from './Assets/Img/Products';
import GrayColumn from './Components/GrayColumn/GrayColumn.component';
import Store from './Components/Store/Store.component';
import './App-0-500px.style.scss';
import './App-500-1000px.style.scss';
import './App-1000-1920px.style.scss';

function App() {

  // this state is the user´s shopping cart
  const [shoppingCart, changeShoppingCart] = useState([]);

  // put a red point over the cart icon if there are items in the shopping cart
  const [point, changePoint] = useState(false);

  
  // with this function we make the shopping cart point appears or disappears
  useEffect(() => {
    if (shoppingCart.length === 0) {
      changePoint(false);
    } else {
      changePoint(true);
    }
  }, [shoppingCart]);
  
    
 
  
  
  return (

    <div className="App">

      <header className='header'>

        <div className='header__logo'>
        <img className='header__logoImg' src={logo} alt="logo"/>
        </div>

        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__purchases'><p className='header__purchasesText'>Purchases</p></li>
            <li className='header__store'><p className='header__storeText'>Store</p></li>
            <li className='header__cart'><FontAwesomeIcon icon={faShoppingCart}/></li>
            <li className='header__search'><FontAwesomeIcon icon={faSearch}/></li>
            <li className='header__bag'><FontAwesomeIcon icon={faShoppingBag}/></li>
          </ul>
        </nav>

        <div className={point ? 'header__point' : 'header__point--modify'}> </div>
        
      </header>

      

      <Store 
      Products={Products}
      changeShoppingCart={changeShoppingCart}
      shoppingCart={shoppingCart}
      />

      <GrayColumn />
      
    </div>
  );
}

export default App;
