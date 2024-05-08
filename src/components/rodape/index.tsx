import { Main } from "./styles"

import iconeLogo from '/casa.png'
import iconeWhatsapp from '/whatsapp.png'
import iconeFacebook from '/facebook.png'
import iconeInstagram from '/instagram.png'

export default function Footer() {
    return(
        <Main>
            <div>
                <p>Quem Somos</p>
                <p>Galeria</p>

                <div className="links-rede-social">
                    <img src={iconeLogo} alt="icone-logo" className="logo"/>

                    <div>
                        <img src={iconeWhatsapp} alt="whatsapp" className="icon"/>
                        <img src={iconeInstagram} alt="instagram" className="icon"/>
                        <img src={iconeFacebook} alt="facebook" className="icon"/>
                    </div>
                </div>

                <p>Transparência</p>
                <p>Doação</p>
            </div>
        </Main>
    )
}