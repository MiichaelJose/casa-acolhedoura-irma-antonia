import { Main } from "./styles"

import iconeLogo from '/casa.png'
import iconeBarra from '/bars-solid.svg'

export default function Header() {
    return(
        <Main>
            <div>
                <img src={iconeLogo} alt="icone-logo" className="logo"/>

                <div className="links-cabecalho"></div>

                <div className="links-rede-social"></div>

                <img src={iconeBarra} alt="icone-barra" className="barra"/>
            </div>
        </Main>
    )
}