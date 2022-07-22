import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { CartProvider } from './CartContext';

function App() {
  const products = [
    { name: 'Gucci shirt', price: 100},
    { name: 'Zara trousers', price: 100},
    { name: 'DG hoodie', price: 100},
    { name: 'New Yorker', price: 100},
  ]
  return (
    <div className="App">
      <CartProvider>
          <Navbar />
          <Products />
      </CartProvider>
      
    </div>
  );
}

export default App;
