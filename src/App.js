import { HashRouter, Route, Routes } from "react-router-dom";
// Import des pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
// Import CSS
import './assets/css/App.css';
// Import Layout
import MainLayout from './layouts/MainLayout';


const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" index exact element={ <Home /> } />
      </Routes>
    </MainLayout>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={ <MainRoutes /> } />
        <Route path="*/*" element={ <NotFound /> } />
      </Routes>
    </HashRouter>
  );
}