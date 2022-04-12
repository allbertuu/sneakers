// scripts
import adjustPrice from './assets/scripts/adjustPrice';
// components
import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'
import Footer from './components/layout/Footer';
// contexts
import { ProductsContextProvider } from './contexts/Products';
// styles
import './sass/App.scss';

function App() {

  const price = adjustPrice(125.00);

  return (
    <ProductsContextProvider>
      <div className="container">
        <Header price={price} />
        <main>
          <Product />
          <Description price={price} />
        </main>
        <Footer />
      </div>
    </ProductsContextProvider>
  );
}

export default App;
