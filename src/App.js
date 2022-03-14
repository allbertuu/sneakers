import Header from './components/layout/Header';
import Product from './components/layout/Product';
import Description from './components/layout/Description'

import './styles/App.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Product />
        <Description />
      </main>
    </div>
  );
}

export default App;
