import Header from './components/Header/Header';
import './App.css';
import './index.css'
import Meals from './components/Meals/Meals';
import Cart from './components/Header/Cart';
import { useState } from 'react';
import Context from './components/store/Context';

function App() {

  const [cartRender, setCartRender] = useState(false)

  const onClick = () => {
    setCartRender(true)
  }

  const onClose = () => {
    setCartRender(false)
  }

  return (
    <Context className="App">
      {cartRender && <Cart onClose={onClose} />}
      <Header clickHandle={onClick}/>
      <Meals />
    </Context>
  );
}

export default App;
