import ListOneAtaRegister from "@/pages/ListOneAtaRegister/listOneAtaRegister";
import { Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtasRegister from "@/pages/AtasRegister";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "./layout";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

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
                        <Route path="/" element={<AtasRegister />}>
                            <Route index element={<AtasRegister />} />
                            <Route path="listOneAtaRegister" element={<ListOneAtaRegister />} />
                        </Route>
                    </Routes>
                </div>
                <Button className="support-button"><FaWhatsapp /> Suporte</Button>
            </div>
        </BrowserRouter>

    );
};

export default NavigationConfig;
