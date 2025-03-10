import MeetingStatus from "@/components/meetingStatus/meetingStatus";
import { DropdownMenuRadio } from "@/components/dropDown/dropDown";
import UserHeader from "@/components/userHeader/userHeader";
import Spinner from "@/components/spinner/spinner";
import User from "@/assets/ataRegister/user.jpg";
import useStore from "@/store/atasRegisterStore";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { Meeting } from "@/@types/AtaType";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import meetings from "./meetings";
import "./style.scss";

export default function AtasRegister() {

    const { setRegister } = useStore();
    let [loading, setLoading] = useState(false);
    const [filteredRegister, setFilteredRegister] = useState<Meeting[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSetRegister = (meeting: Meeting) => {
        setRegister(meeting);
        localStorage.setItem("register", JSON.stringify(meeting));
        navigate("/listOneAtaRegister");
    }

    const handleClearSearch = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setFilteredRegister([]);
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
        setLoading(true);
        event.preventDefault();
        setTimeout(() => {
            let searchValue = "";

            if (inputRef.current) {
                searchValue = inputRef.current.value.toLowerCase();
            }

            const filtered = meetings.filter((meeting) => meeting.name.toLowerCase().includes(searchValue))
            setFilteredRegister(filtered);
            setLoading(false);
        }, 1000)
    };

    const registers = filteredRegister.length > 0 ? filteredRegister : meetings

    return (
        <div className="main-atas-register-content">
            <UserHeader User={User} />
            <div className="atas-register-result-header">
                <h3 className="text-[#414141] font-bold">{registers.length} {registers.length === 1 || filteredRegister.length === 1 ? "RESULTADO ENCONTRADO" : "RESULTADOS ENCONTRADOS"}</h3>
                <div className="w-full h-[2px] bg-[#7A7E7F] rounded-full" />
                <div className="atas-register-result-header-filter">
                    <div className="atas-register-result-header-filter-toggler">
                        <DropdownMenuRadio title="PARTICIPANTES" values={["TODOS", "ABERTO", "FECHADO", "CANCELADO"]} />
                        <DropdownMenuRadio title="STATUS" values={["TODOS", "ABERTO", "FECHADO", "CANCELADO"]} />
                        <DropdownMenuRadio title="DATA" values={["TODOS", "HOJE", "MANHA", "TARDE", "NOITE"]} />
                    </div>
                    <form className="atas-register-result-header-filter-input" onSubmit={handleSearch}>
                        <input type="text" placeholder="Pesquisar..." ref={inputRef} />
                        <div className="icon-search">
                            <Spinner loading={loading} />
                            {!loading && <CiSearch size={25} onClick={handleSearch} />}
                        </div>
                    </form>
                </div>
            </div>
            <div className="atas-register-result">
                {filteredRegister.length > 0 ? <span
                    onClick={handleClearSearch}
                    className="flex flex-row  items-center cursor-pointer">Limpar Filtros <IoIosClose size={30} /></span> : null}
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
