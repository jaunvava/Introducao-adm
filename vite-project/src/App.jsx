import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Calcula from "./pages/Calculadora";
import Layout from "./layout/layout";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="calcula" element={<Calcula />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
