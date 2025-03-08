import ListOneAtaRegister from "@/pages/ListOneAtaRegister/listOneAtaRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtasRegister from "@/pages/AtasRegister";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "@/layout/Layout";
import "./style.scss";

const NavigationConfig = () => {
    return (
        <BrowserRouter>
            <div className="router-container">
                <div className="sidebar">
                    <Layout />
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<AtasRegister />} />
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
