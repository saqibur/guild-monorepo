import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

function RouteCollections() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteCollections;
