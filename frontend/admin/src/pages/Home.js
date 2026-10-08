import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Home = () => {
    const allowedRoles = ['admin', 'committee', 'mentor'];
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log({ allowedRoles });
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: "Guild Admin Console" }), _jsxs("b", { children: ["Api url:", apiUrl] })] }));
};
export default Home;
