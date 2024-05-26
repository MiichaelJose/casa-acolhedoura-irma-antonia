import { Main } from "./styles";

import Header from "../../components/cabecalho";
import Footer from "../../components/rodape";
import iconeMao from "/hand-holding-medical-solid.svg";
import iconeCasaMao from "/casa-mao.png";
import Button from "../../components/botao";

export default function About() {
    return (
        <>
            <Header />
            <Main className="secao-padrao">
                <h2>QUEM SOMOS</h2>
                <p>
                    Somos uma organização em Jaguariúna que oferece abrigo e
                    apoio imediato para pessoas em situação de rua. Nossa
                    prioridade é garantir um ambiente seguro e acolhedor para
                    indivíduos e famílias, visando à reintegração social e
                    autonomia através de assistência especializada.
                </p>

                <div>
                    <div className="secao-valores-acoes">
                        <h3>Nossos Valores e Nossas Ações:</h3>
                        <div>
                            <div>
                                <img src={iconeMao} alt="" className="icon" />
                                <p>
                                    Respeito e Dignidade: Valorizamos e
                                    respeitamos a individualidade e a dignidade
                                    de cada pessoa que acolhemos, proporcionando
                                    um ambiente seguro e acolhedor livre de
                                    discriminação.
                                </p>
                            </div>
                            <div>
                                <img src={iconeMao} alt="" className="icon" />
                                <p>
                                    Empatia e Compaixão: Demonstramos empatia e
                                    compaixão em nossas interações com os
                                    indivíduos em situação de rua, oferecendo
                                    apoio emocional e compreensão em momentos de
                                    dificuldade.
                                </p>
                            </div>
                            <div>
                                <img src={iconeMao} alt="" className="icon" />
                                <p>
                                    Comprometimento com a Inclusão: Estamos
                                    comprometidos com a inclusão social,
                                    promovendo a igualdade de oportunidades e
                                    garantindo acesso aos serviços públicos para
                                    todos, independentemente de sua situação de
                                    vida.
                                </p>
                            </div>
                            <div>
                                <img src={iconeMao} alt="" className="icon" />
                                <p>
                                    Trabalho em Equipe: Trabalhamos em equipe,
                                    colaborando e apoiando uns aos outros para
                                    garantir a eficácia de nossos serviços e o
                                    bem-estar dos acolhidos.
                                </p>
                            </div>
                            <div>
                                <img src={iconeMao} alt="" className="icon" />
                                <p>
                                    Transparência e Responsabilidade: Agimos com
                                    transparência e responsabilidade em todas as
                                    nossas operações, garantindo a prestação de
                                    contas e a confiança da comunidade que
                                    servimos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="localização">
                        <h3>Nossa Localização</h3>
                        <p>
                            A Casa Irmã Antônia está localizada no endereço:
                            <br />
                            R. Mal. Floriano Peixoto, 443 - Jardim Berlim,
                            Jaguariúna - SP, 13820-000
                        </p>
                        <img src={iconeCasaMao} alt="" />
                    </div>

                    <div className="botoes">
                        <Button link="1" color={"#98FB98"}>
                            FAÇA UMA DOAÇÃO
                        </Button>
                        <Button link="1" color={"#FFFFCC"}>
                            SEJA VOLUNTÁRIO
                        </Button>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
}
