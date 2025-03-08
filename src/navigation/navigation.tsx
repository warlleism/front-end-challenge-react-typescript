import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout";
import "./style.scss";
import Home from "@/pages/Home";
import AtasRegister from "@/pages/AtasRegister";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ListOneAtaRegister from "@/pages/ListOneAtaRegister/listOneAtaRegister";

const NavigationConfig = () => {
    return (
        <BrowserRouter>
            <div className="router-container">
                <div className="sidebar-mobile-toggler">
                    <CiMenuFries size={40} />
                </div>
                <div className="sidebar">
                    <Layout />
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/atasRegister" element={<AtasRegister />} />
                        <Route path="/listOneAtaRegister" element={<ListOneAtaRegister />} />
                    </Routes>
                </div>
                <div className="support">
                    <Button className="support-button"><FaWhatsapp /> Suporte</Button>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default NavigationConfig;
