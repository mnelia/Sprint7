
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import UserWelcome from "../pages/UserWelcome";



const Routing = () => {
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<UserWelcome />} /> 
           <Route path="/Main" element={<Main />} /> 
        </Routes>
        </BrowserRouter>
};

export default Routing;
