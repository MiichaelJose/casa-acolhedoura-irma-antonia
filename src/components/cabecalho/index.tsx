import { Main, Link } from "./styles";

import iconeLogo from "/casa.png";
import iconeBarra from "/bars-solid.svg";
import iconeWhatsapp from "/whatsapp.png";
import iconeFacebook from "/facebook.png";
import iconeInstagram from "/instagram.png";

export default function Header() {
  return (
    <Main>
      <nav>
        <Link to={"/"}>
          <img src={iconeLogo} alt="icone-logo" className="logo" />
        </Link>

        <div className="links-cabecalho">
          <Link to={"/quem-somos"}>Quem Somos</Link>
          <Link to={"/galeria"}>Galeria</Link>
          <Link to={"/transparencia"}>Transparência</Link>
          <Link to={"/doacao"}>Doação</Link>
        </div>

        <div className="links-rede-social">
          <img src={iconeWhatsapp} alt="whatsapp" className="icon" />
          <img src={iconeInstagram} alt="instagram" className="icon" />
          <img src={iconeFacebook} alt="facebook" className="icon" />
        </div>

        <img src={iconeBarra} alt="icone-barra" className="barra" />
      </nav>
    </Main>
  );
}
