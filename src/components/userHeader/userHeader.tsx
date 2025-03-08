import "./style.scss";

export default function UserHeader({ User }: { User: string }) {
    return (

        <div className="atas-register-header">
            <div className="atas-register-header-user">
                <img src={User} alt="" />
            </div>
            <div className="atas-register-header-info">
                <h3>Daniel Cascata</h3>
                <p>Prefeito de Florianópolis</p>
            </div>
        </div>
    )
}