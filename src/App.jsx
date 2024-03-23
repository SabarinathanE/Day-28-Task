import "./App.css";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
import CreateContextProvider from "./context/ProductContext";

export default function App() {

  return (
    <section>
      <Navbar />
      <CreateContextProvider>
      <ProductDisplay />
      </CreateContextProvider>
    </section>
  );
}