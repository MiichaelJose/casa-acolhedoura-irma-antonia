import { Main, Link } from "./styles";

import iconeLogo from "/casa.png";
import iconeWhatsapp from "/whatsapp.png";
import iconeFacebook from "/facebook.png";
import iconeInstagram from "/instagram.png";

export default function Footer() {
    return (
        <Main>
            <div>
                <Link to={"/quem-somos"} relative="path">
                    Quem Somos
                </Link>
                <Link to={"/galeria"}>Galeria</Link>

                <div className="links-rede-social">
                    <Link to={"/"}>
                        <img
                            src={iconeLogo}
                            alt="icone-logo"
                            className="logo"
                        />
                    </Link>

                    <div>
                        <img
                            src={iconeWhatsapp}
                            alt="whatsapp"
                            className="icon"
                        />
                        <img
                            src={iconeInstagram}
                            alt="instagram"
                            className="icon"
                        />
                        <img
                            src={iconeFacebook}
                            alt="facebook"
                            className="icon"
                        />
                    </div>
                </div>

                <Link to={"/transparencia"} preventScrollReset={true}>
                    Transparência
                </Link>
                <Link to={"/doacao"}>Doação</Link>
            </div>
        </Main>
    );
}
