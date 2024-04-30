import { Main } from './styles'

import Header from '../../components/cabecalho'

import imagemEquipe from '/equipe.jpg'
import iconeBandeira from '/flag-solid.svg'
import iconeMao from '/hands-holding-child-solid.svg'
export default function Home() {
    return(
        <>
            <Header/>
            <Main>
                <div className='introducao-sobre'>
                    <h2>Casa Acolhedora <br/> Irmã Antônia</h2>
                    
                    <p>Organização localizada na cidade de Jaguariúna dedicada a oferecer atendimento e acolhimento para homens, mulheres e famílias que se encontram em situação de vulnerabilidade social ou risco.</p>

                    <div>
                        <button>QUEM SOMOS?</button>
                        <button>FAÇA UMA DOAÇÃO</button>
                    </div>
                </div >

                <div className='imagem-valores'>
                    
                    <img src={imagemEquipe} alt="" />

                    <section>
                        <div>
                            <img src={iconeBandeira} alt="" />
                            <span>NOSSOS <br/> VALORES</span>
                        </div>
                        <div>
                            <img src={iconeMao} alt="" />
                            <span>COMO <br/> AJUDAR</span>
                        </div>
                        <div>
                            <img src={iconeBandeira} alt="" />
                            <span>NOSSAS <br/> AÇÕES</span>
                        </div>
                    </section>
                </div>
            </Main>
        </>
    )
}