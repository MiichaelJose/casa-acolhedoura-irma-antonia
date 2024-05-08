import { Main, Section, Article } from './styles'

import Header from '../../components/cabecalho'
import Button from '../../components/botao'

import imagemEquipe from '/equipe.jpg'
import iconeBandeira from '/flag-solid.svg'
import iconeMao from '/hands-holding-child-solid.svg'
import iconeCasa from '/house-solid.svg'
import iconeCompasso from '/compass-solid.svg'
import iconeMaoMed from '/hand-holding-medical-solid.svg'
import iconeCasaMao from '/casa-mao.png'


export default function Home() {
    return(
        <>
            <Header/>
            <Main>
                    <div className='introducao-sobre'>
                        <h2>Casa Acolhedora <br/> Irmã Antônia</h2>
                        
                        <p>Organização localizada na cidade de Jaguariúna dedicada a oferecer atendimento e acolhimento para homens, mulheres e famílias que se encontram em situação de vulnerabilidade social ou risco.</p>

                        <div>
                            <Button color={'#ADD8E6'}> QUEM SOMOS?</Button>
                            <Button color={'#98FB98'}>FAÇA UMA DOAÇÃO</Button>
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
            <Section>
                <div className="conteudo">
                    <div className='compromissos'>
                        <h2>Nossos Compromissos</h2>
                        
                        <p>Alguns dos nossos compromissos para atender às necessidades dos indivíduos e famílias em situação de vulnerabilidade, incluindo:</p>

                        <div className='caixas'>
                            <div>
                                <img src={iconeCasa} alt="icone" />
                                <p>Acolhimento provisório</p>
                            </div>
                            <div>
                                <img src={iconeMaoMed} alt="icone" />
                                <p>Assistência social</p>
                            </div>
                            <div>
                                <img src={iconeCompasso} alt="icone" />
                                <p>Encaminhamento</p>
                            </div>
                            <div>
                                <img src={iconeCompasso} alt="icone" />
                                <p>Orientação</p>
                            </div>
                            <div>
                                <img src={iconeCompasso} alt="icone" />
                                <p>Apoio emocial e suporte</p>
                            </div>
                        </div>

                        <div className='botoes'>
                            <Button color={'#98FB98'}>FAÇA UMA DOAÇÃO</Button>
                            <Button color={'#FFFFCC'}>SEJA VOLUNTÁRIO</Button>
                        </div>
                    </div >

                    <div className='localizaçao'>
                        <h2>Nossa Localização</h2>
                        
                        <p>A Casa Irmã Antônia está localizada  no endereço: <br/>
                        R. Mal. Floriano Peixoto, 443 - Jardim Berlim, Jaguariúna - SP, 13820-000</p>

                        <img src={iconeCasaMao} alt="" />
                    </div >
                </div>
            </Section>
            <Article>
                <h2>Galeria de fotos</h2>

                <div className='galeria'>
                    <img src={'/g1.jpg'} alt="" />
                    <img src={'/g2.jpg'} alt="" />
                    <img src={'/g5.jpg'} alt="" />
                    <img src={'/g4.jpg'} alt="" />
                    <img src={'/g6.jpeg'} alt="" />
                    <img src={'/g7.jpeg'} alt="" />
                </div>
            </Article>
        </>
    )
}