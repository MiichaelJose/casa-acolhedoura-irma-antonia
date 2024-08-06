import { Main, Link, Modal } from "./styles";

import iconeLogo from "/casa.png";
import iconeBarra from "/bars-solid.svg";
import iconeClose from "/xmark-solid.svg";
import iconeWhatsapp from "/whatsapp.png";
import iconeFacebook from "/facebook.png";
import iconeInstagram from "/instagram.png";

import { useState } from "react";

type HeaderType = {
    width?: string;
};

export default function Header({ width = "100%" }: HeaderType) {
    const [useModal, setModal] = useState(false);

    const modal = () => {
        return (
            <Modal>
                <Link to={"/quem-somos"}>Quem Somos</Link>
                <Link to={"/galeria"}>Galeria</Link>
                <Link to={"/transparencia"}>Transparência</Link>
                <Link to={"/doacao"}>Doação</Link>
            </Modal>
        );
    };

    return (
        <div>
            <Main width={width}>
                <nav>
                    <Link to={"/"}>
                        <img
                            src={iconeLogo}
                            alt="icone-logo"
                            className="logo"
                        />
                    </Link>

                    <div className="links-cabecalho">
                        <Link to={"/quem-somos"}>Quem Somos</Link>
                        <Link to={"/galeria"}>Galeria</Link>
                        <Link to={"/transparencia"}>Transparência</Link>
                        <Link to={"/doacao"}>Doação</Link>
                    </div>

                    <div className="links-rede-social">
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

                    <img
                        src={useModal ? iconeClose : iconeBarra}
                        alt="icone-barra"
                        className="barra"
                        onClick={() => setModal(!useModal)}
                    />
                </nav>
            </Main>
            {useModal ? modal() : <></>}
        </div>
    );
}
