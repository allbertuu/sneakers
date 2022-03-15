import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'
import Footer from './components/layout/Footer';

import './styles/App.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Product />
        <Description />
      </main>
      <Footer />
    </div>
  );
}

export default App;
