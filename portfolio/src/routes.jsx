import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About />} />
                <Route path="/project" element={ <Project /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
