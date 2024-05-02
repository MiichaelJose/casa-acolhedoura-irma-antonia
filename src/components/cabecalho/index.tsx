import { Main } from "./styles"

import iconeLogo from '/casa.png'
import iconeBarra from '/bars-solid.svg'
import iconeWhatsapp from '/whatsapp.png'
import iconeFacebook from '/facebook.png'
import iconeInstagram from '/instagram.png'

export default function Header() {
    return(
        <Main>
            <div>
                <img src={iconeLogo} alt="icone-logo" className="logo"/>

                <div className="links-cabecalho">
                    <p>Quem Somos</p>
                    <p>Galeria</p>
                    <p>Transparência</p>
                    <p>Doação</p>
                </div>

                <div className="links-rede-social">
                    <img src={iconeWhatsapp} alt="whatsapp" />
                    <img src={iconeInstagram} alt="instagram" />
                    <img src={iconeFacebook} alt="facebook" />
                </div>

                <img src={iconeBarra} alt="icone-barra" className="barra"/>
            </div>
        </Main>
    )
}