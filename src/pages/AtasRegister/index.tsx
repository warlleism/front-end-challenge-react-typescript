import "./style.scss";
import User from "@/assets/ataRegister/user.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import meetings from "./meetings";
import MeetingStatus from "@/components/meetingStatus/meetingStatus";
import { FaCircle } from "react-icons/fa";
import useStore from "@/store/atasRegisterStore";
import { Meeting } from "@/@types/AtaType";
import { useNavigate } from "react-router-dom";
import UserHeader from "@/components/userHeader/userHeader";

export default function AtasRegister() {

    const { setRegister } = useStore();


    const navigate = useNavigate();

    const handleSetRegister = (meeting: Meeting) => {
        setRegister(meeting);
        localStorage.setItem("register", JSON.stringify(meeting));
        navigate("/listOneAtaRegister");
    }

    return (
        <div className="main-atas-register-content">

            <UserHeader User={User} />

            <div className="atas-register-result-header">
                <h3 className="text-[#414141] font-bold">46 RESULTADOS ENCONTRADOS</h3>
                <div className="w-full h-2 bg-[#7A7E7F] rounded-full" />
                <div className="atas-register-result-header-filter">
                    <div className="atas-register-result-header-filter-toggler">
                        <div>PARTICIPANTES <IoMdArrowDropdown size={30} color="#4D4D4D" /></div>
                        <div>STATUS <IoMdArrowDropdown size={30} color="#4D4D4D" /></div>
                        <div>DATA <IoMdArrowDropdown size={30} color="#4D4D4D" /></div>
                    </div>
                    <form className="atas-register-result-header-filter-input">
                        <input type="text" placeholder="Pesquisar..." />
                        <CiSearch size={30} color="#fff" className="icon-search" />
                    </form>
                </div>
            </div>

            <div className="atas-register-result">
                {meetings.map((meeting) => (
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