import adjustPrice from './assets/scripts/adjustPrice';

import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'
import Footer from './components/layout/Footer';

import './styles/App.scss';

function App() {

  const price = adjustPrice(125.00);

  return (
    <div className="page">
      <Header price={price} />
      <main>
        <Product />
        <Description price={price}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
