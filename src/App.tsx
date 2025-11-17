import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produto/deletarProduto/DeletarProduto";
import FormProduto from "./components/produto/formProduto/FormProduto";
import ListaProdutos from "./components/produto/listaProdutos/ListaProdutos";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import VozesDaQuebrada from "./components/public/VozesDaQuebrada";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import PublicHome from "./pages/public/PublicHome";
import PublicContato from "./pages/public/PublicContato";
import PublicSobreNos from "./pages/public/PublicSobreNos";
import Auth from "./pages/auth/Auth";

import "react-toastify/dist/ReactToastify.css";

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // Esconde navbar e footer no Auth

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className="min-h-[80vh]">
        <Routes>
          {/* PÚBLICAS */}
          <Route path="/" element={<PublicHome />} />
          <Route path="/sobre" element={<PublicSobreNos />} />
          <Route path="/contato" element={<PublicContato />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/cadastro" element={<Navigate to="/login" replace />} />

          {/* PRIVADAS */}
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/sobre" element={<PublicSobreNos />} />
          <Route path="/contato" element={<PublicContato />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <LayoutWrapper />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
