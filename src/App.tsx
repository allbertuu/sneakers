// components
import Header from "./components/Header";
import Product from "./components/Product";
import Description from "./components/Description";
import Footer from "./components/Footer";
// styles
import "./sass/App.scss";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Product />
        <Description />
      </main>
      <Footer />
    </div>
  );
}
