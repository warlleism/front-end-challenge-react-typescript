import Logo from "@/assets/layout/logo-2.png";
import "./style.scss"
import { CirclePlus } from "lucide-react"
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { ButtonIconStyled } from "@/components/buttonIcon/buttonIcon";

export default function Layout() {

    const localStorageRouter = localStorage.getItem("router")

    const [routerSelect, setRouterSelect] = useState<string>(localStorageRouter || "home");

    const handleRouterSelect = (router: string) => {
        setRouterSelect(router);
        localStorage.setItem("router", router);
    };

    return (
        <div className="main-layout-container">
            <div className="layout-header">
                <a className="layout-logo" href="/" onClick={() => handleRouterSelect("home")}> <img src={Logo} alt="Logo" className="layout-logo" /></a>
                <ButtonIconStyled>
                    <CirclePlus className="icon-plus" /> Nova Reunião Com Ata
                </ButtonIconStyled>
            </div>
            <ul className="menu-ul-list">
                <li className="menu-item" style={{ background: routerSelect === "home" ? "#E7F7FF" : "transparent" }}>
                    <a href="/" onClick={() => handleRouterSelect("home")}>Início</a>
                </li>
                <li className="menu-item" style={{ background: routerSelect === "about" ? "#E7F7FF" : "transparent" }}>
                    <a href="/" onClick={() => handleRouterSelect("about")}>Registro de Atas</a>
                </li>
                <li className="menu-item" style={{ background: routerSelect === "signature" ? "#E7F7FF" : "transparent" }}>
                    <a href="/" onClick={() => handleRouterSelect("signature")}>Assinatura<FaCircle color="red" size={13} className="ml-2 pointer-events-none animate-pulse" /></a>
                </li>
                <li className="menu-item" style={{ background: routerSelect === "calendar" ? "#E7F7FF" : "transparent" }}>
                    <a href="/" onClick={() => handleRouterSelect("calendar")}>Calendário</a>
                </li>
                <li className="menu-item" style={{ background: routerSelect === "history" ? "#E7F7FF" : "transparent" }}>
                    <a href="/" onClick={() => handleRouterSelect("history")}>Histórico</a>
                </li>
            </ul>
            <div className="settings"><a href="/">Configurações</a></div>
        </div>
    );
}