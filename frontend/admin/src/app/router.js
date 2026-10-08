import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
function RouteCollections() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
export default RouteCollections;
