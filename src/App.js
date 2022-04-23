// scripts
import adjustPrice from './assets/scripts/adjustPrice';
// components
import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'
import Footer from './components/layout/Footer';
// contexts
import { ProductsListContextProvider } from './contexts/ProductsList';
// styles
import './sass/App.scss';

function App() {

  const price = adjustPrice(125.00);

  return (
    <ProductsListContextProvider>
      <div className="container">
        <Header price={price} />
        <main>
          <Product />
          <Description price={price} />
        </main>
        <Footer />
      </div>
    </ProductsListContextProvider>
  );
}

export default App;
