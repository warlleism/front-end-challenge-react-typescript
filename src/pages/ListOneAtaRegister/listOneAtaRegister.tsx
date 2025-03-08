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
        navigate("/atasRegister");
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
                    <p className="ata-text-content font-semibold"><div>Status:</div>  <span >{register.status}</span></p>
                    <p className="ata-text-content font-semibold"><div>Plataforma:</div><span >{register.platform}</span></p>
                    <p className="ata-text-content font-semibold"><div>Video chamada:</div><span >{register.videoCallLink}</span></p>
                    <p className="ata-text-content font-semibold"><div>Data:</div><span >{register.date}</span></p>
                    <p className="ata-text-content font-semibold"><div>Duração:</div><span >{register.duration}</span></p>
                    <div className="h-[1px] w-full bg-[#4141412e] rounded-full mb-5 mt-5" />
                    <div className="ata-text-content flex flex-col gap-2">
                        <h3 className="text-[#252628] text-[1.3rem] font-semibold">Pauta</h3>
                        <span>{register.staff}</span>
                    </div>
                    <div className="h-[1px] w-full bg-[#4141412e] rounded-full mb-5 mt-5" />
                    <div className="ata-text-content flex flex-col gap-2">
                        <h3 className="text-[#252628] text-[1.3rem] font-semibold">Participantes</h3>
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