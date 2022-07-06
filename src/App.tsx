// components
import Header from "./components/Header";
import Product from "./components/Product";
import Description from "./components/Description";
import Footer from "./components/Footer";
// styles
import "./sass/App.scss";
import { GlobalStyle } from "./styles/Global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <main>
          <Product />
          <Description />
        </main>
        <Footer />
      </div>
    </>
  );
}
