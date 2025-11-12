import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produto/deletarProduto/DeletarProduto";
import FormProduto from "./components/produto/formProduto/FormProduto";
import ListaProdutos from "./components/produto/listaProdutos/ListaProdutos";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";

import { AuthProvider } from "./contexts/AuthContext";
import { AuthContext } from "./contexts/AuthContext";

import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";
import PublicHome from "./pages/public/PublicHome"; // <<--- NOVO

import "react-toastify/dist/ReactToastify.css";

// Guard simples: só permite acesso se houver token
function RequireAuth({ children }: { children: JSX.Element }) {
  const { usuario } = useContext(AuthContext);
  if (!usuario?.token) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              {/* PÚBLICAS */}
              <Route path="/" element={<PublicHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />

              {/* PRIVADAS */}
              <Route
                path="/home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/categorias"
                element={
                  <RequireAuth>
                    <ListaCategorias />
                  </RequireAuth>
                }
              />
              <Route
                path="/cadastrarcategoria"
                element={
                  <RequireAuth>
                    <FormCategoria />
                  </RequireAuth>
                }
              />
              <Route
                path="/editarcategoria/:id"
                element={
                  <RequireAuth>
                    <FormCategoria />
                  </RequireAuth>
                }
              />
              <Route
                path="/deletarcategoria/:id"
                element={
                  <RequireAuth>
                    <DeletarCategoria />
                  </RequireAuth>
                }
              />
              <Route
                path="/produtos"
                element={
                  <RequireAuth>
                    <ListaProdutos />
                  </RequireAuth>
                }
              />
              <Route
                path="/cadastrarproduto"
                element={
                  <RequireAuth>
                    <FormProduto />
                  </RequireAuth>
                }
              />
              <Route
                path="/editarproduto/:id"
                element={
                  <RequireAuth>
                    <FormProduto />
                  </RequireAuth>
                }
              />
              <Route
                path="/deletarproduto/:id"
                element={
                  <RequireAuth>
                    <DeletarProduto />
                  </RequireAuth>
                }
              />
              <Route
                path="/perfil"
                element={
                  <RequireAuth>
                    <Perfil />
                  </RequireAuth>
                }
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
