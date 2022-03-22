import adjustPrice from './assets/scripts/adjustPrice';

import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'
import Footer from './components/layout/Footer';

import { ProductsContextProvider } from './contexts/Products';

import './styles/App.scss';

function App() {

  const price = adjustPrice(125.00);

  return (
    <ProductsContextProvider>
      <div className="container">
        <div className="sm:h-screen">
          <Header price={price} />
          <main>
            <Product />
            <Description price={price} />
          </main>
        </div>
        <Footer />
      </div>
    </ProductsContextProvider>
  );
}

export default App;
