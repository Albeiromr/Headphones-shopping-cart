import React from 'react';
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
        
      </header>

      

      <Store 
      Products={Products}
      />

      <GrayColumn />
      
    </div>
  );
}

export default App;
