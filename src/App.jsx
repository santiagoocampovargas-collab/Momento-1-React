import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import Producto from "./pages/Producto/Producto";

const App = () => (
  <>
    <Header />
    <main>
      <Producto />
    </main>
    <Footer />
  </>
);

export default App;