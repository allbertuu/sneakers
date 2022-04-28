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
  return (
    <ProductsListContextProvider>
      <div className="container">
        <Header />
        <main>
          <Product />
          <Description />
        </main>
        <Footer />
      </div>
    </ProductsListContextProvider>
  );
}

export default App;
