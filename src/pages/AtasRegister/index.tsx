import MeetingStatus from "@/components/meetingStatus/meetingStatus";
import { DropdownMenuRadio } from "@/components/dropDown/dropDown";
import UserHeader from "@/components/userHeader/userHeader";
import User from "@/assets/ataRegister/user.png";
import useStore from "@/store/atasRegisterStore";
import { useNavigate } from "react-router-dom";
import { Meeting } from "@/@types/AtaType";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import meetings from "./meetings";
import "./style.scss";

export default function AtasRegister() {

    const { setRegister } = useStore();
    const [filteredRegister, setFilteredRegister] = useState<Meeting[]>(meetings);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSetRegister = (meeting: Meeting) => {
        setRegister(meeting);
        localStorage.setItem("register", JSON.stringify(meeting));
        navigate("/listOneAtaRegister");
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        let searchValue = "";

        if (inputRef.current)
            searchValue = inputRef.current.value.toLowerCase();

        const filtered = meetings.filter((meeting) => meeting.name.toLowerCase().includes(searchValue))
        setFilteredRegister(filtered);
    };

    const registers = filteredRegister.length > 0 ? filteredRegister : meetings

    return (
        <div className="main-atas-register-content">
            <UserHeader User={User} />
            <div className="atas-register-result-header">
                <h3 className="text-[#414141] font-bold">46 RESULTADOS ENCONTRADOS</h3>
                <div className="w-full h-[2px] bg-[#7A7E7F] rounded-full" />
                <div className="atas-register-result-header-filter">
                    <div className="atas-register-result-header-filter-toggler">
                        <DropdownMenuRadio title="PARTICIPANTES" values={["TODOS", "ABERTO", "FECHADO", "CANCELADO"]} />
                        <DropdownMenuRadio title="STATUS" values={["TODOS", "ABERTO", "FECHADO", "CANCELADO"]} />
                        <DropdownMenuRadio title="DATA" values={["TODOS", "HOJE", "MANHA", "TARDE", "NOITE"]} />
                    </div>
                    <form className="atas-register-result-header-filter-input" onSubmit={handleSearch}>
                        <input type="text" placeholder="Pesquisar..." ref={inputRef} />
                        <CiSearch size={30} color="#fff" className="icon-search" onClick={handleSearch} />
                    </form>
                </div>
            </div>
            <div className="atas-register-result">
                {registers.map((meeting) => (
                    <div key={meeting.id} className="atas-register-result-item" onClick={() => handleSetRegister(meeting)}>
                        <div className="main-atas-register-result-item-info">
                            <FaCircle color="green" size={13} className="mt-[4px] animate-pulse" />
                            <div className="atas-register-result-item-info">
                                <h3>{meeting.name}</h3>
                                <p>{meeting.staff}</p>
                                <p>{meeting.date}</p>
                            </div>
                        </div>
                        <MeetingStatus status={meeting.status} position={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}
