// components
import Header from "./components/layout/Header";
import Product from "./components/layout/Product";
import Description from "./components/layout/Description";
import Footer from "./components/layout/Footer";
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
