import useStore from "@/store/atasRegisterStore";
import "./style.scss";
import { AiOutlineSignature } from "react-icons/ai";
import { CiEdit, CiExport } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineAnnotation } from "react-icons/hi";
import { GiRead } from "react-icons/gi";
import { ButtonIconStyled } from "@/components/buttonIcon/buttonIcon";
import UserHeader from "@/components/userHeader/userHeader";
import User from "@/assets/ataRegister/user.png";
import { FaCircle } from "react-icons/fa";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MeetingStatus from "@/components/meetingStatus/meetingStatus";
import { IoIosLink } from "react-icons/io";


export default function ListOneAtaRegister() {

    const navigate = useNavigate();
    const { register, setRegister } = useStore();

    useEffect(() => {
        const register = localStorage.getItem("register");
        if (register) {
            const parsedRegister = JSON.parse(register);
            setRegister(parsedRegister);
        }
    }, [])

    const handleClose = () => {
        setRegister(null);
        navigate("/");
    }

    if (!register) {
        return
    }

    return (
        <div className="main-list-one-ata-register">
            <UserHeader User={User} />
            <div className="list-one-ata-register">
                <div className="card-ata-register">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <FaCircle color="green" size={13} className="mt-[4px] animate-pulse" />
                            <h3 className="text-[#363636] title-ata-register">{register.name}</h3>
                        </div>
                        <IoClose size={30} color="#363636" className="cursor-pointer" onClick={() => handleClose()} />
                    </div>
                    <div className="h-[1px] w-full bg-[#4141412e] rounded-full mb-5 mt-5" />
                    <div className="ata-text-content">
                        <div>Status:</div>
                        <MeetingStatus status={register?.status} position={false} />
                    </div>
                    <div className="ata-text-content">
                        <div>Plataforma:</div>
                        <div className="text-[#434343] font-semibold">{register.platform}</div>
                    </div>
                    <div className="ata-text-content">
                        <div>Video chamada:</div>
                        <div className="flex flex-row gap-2 cursor-pointer font-semibold " style={{ color: "#009DD9" }}><IoIosLink color="#00dd9" size={20} /> {register.videoCallLink}</div>
                    </div>
                    <div className="ata-text-content">
                        <div>Data:</div>
                        <div className="text-[#434343] font-semibold">{register.date}</div>
                    </div>
                    <div className="ata-text-content">
                        <div>Duração:</div>
                        <div className="text-[#434343] font-semibold">{register.duration}</div>
                    </div>
                    <div className="h-[1px] w-full bg-[#4141412e] rounded-full mb-5 mt-5" />
                    <div className="flex flex-col gap-2 ata-text-content">
                        <h3 className="text-[#252628] text-[1.1rem] font-semibold">Pauta</h3>
                        <div className="text-[#434343] font-semibold xl:pl-[30px]">{register.staff}</div>
                    </div>
                    <div className="h-[1px] w-full bg-[#4141412e] rounded-full mb-5 mt-5" />
                    <div className="flex flex-col gap-2 ata-text-content">
                        <h3 className="text-[#252628] text-[1.1rem] font-semibold">Participantes</h3>
                        <div className="card-ata-register-participants">
                            {
                                register.participants.map((participant: string, index: number) => (
                                    <img className="image-participant" key={index} src={participant} alt="participant" />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="options-ata-register">
                    <div className="visualize-ata">
                        <ButtonIconStyled style={{ background: "#005B85" }}>
                            <GiRead /> Visualizar Ata
                        </ButtonIconStyled>
                    </div>
                    <div className="options">
                        <h3 className="text-[#252628] text-[1.3rem]">Opções</h3>
                        <ButtonIconStyled>
                            <AiOutlineSignature /> Assinatura
                        </ButtonIconStyled>
                        <ButtonIconStyled>
                            <CiEdit /> Editar
                        </ButtonIconStyled>
                        <ButtonIconStyled>
                            <MdDeleteOutline /> Deletar
                        </ButtonIconStyled>
                        <ButtonIconStyled>
                            <CiExport /> Exportar PDF
                        </ButtonIconStyled>
                    </div>
                    <div className="options">
                        <h3 className="text-[#252628] text-[1.3rem]">Anotações</h3>
                        <ButtonIconStyled>
                            <HiOutlineAnnotation /> Anotações
                        </ButtonIconStyled>
                    </div>
                </div>

            </div>
        </div>
    );
}