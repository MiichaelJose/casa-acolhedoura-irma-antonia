import { Main, Link } from "./styles";

import iconeLogo from "/casa.png";
import iconeWhatsapp from "/whatsapp.png";
import iconeFacebook from "/facebook.png";
import iconeInstagram from "/instagram.png";

export default function Footer() {
    return (
        <Main>
            <div>
                <Link to={"/quem-somos"} reloadDocument>
                    Quem Somos
                </Link>
                <Link to={"/galeria"} reloadDocument>
                    Galeria
                </Link>

                <div className="links-rede-social">
                    <Link to={"/"} reloadDocument>
                        <img
                            src={iconeLogo}
                            alt="icone-logo"
                            className="logo"
                        />
                    </Link>

                    <div>
                        <a href="https://wa.me/551921410082">
                            <img
                                src={iconeWhatsapp}
                                alt="whatsapp"
                                className="icon"
                            />
                        </a>
                        <a href="https://www.instagram.com/casairmaantonia/">
                            <img
                                src={iconeInstagram}
                                alt="instagram"
                                className="icon"
                            />
                        </a>
                        <a href="https://pt-br.facebook.com/casairmaantonia/">
                            <img
                                src={iconeFacebook}
                                alt="facebook"
                                className="icon"
                            />
                        </a>
                    </div>
                </div>

                <Link to={"/transparencia"} reloadDocument>
                    Transparência
                </Link>
                <Link to={"/doacao"} reloadDocument>
                    Doação
                </Link>
            </div>
        </Main>
    );
}
