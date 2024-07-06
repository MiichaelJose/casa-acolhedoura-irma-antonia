import { Main, Section, Divisor, SectionMissaoValores } from "./styles";

import Header from "../../components/header";

import imgcrianca from "/crianca-cinza.jpg";
import imgmorador from "/morador-cinza.jpg";
import imgmulheres from "/mulheres-cinza.png";
import img from "/img.svg";
import imgDoacao from "/doacao.svg";
import Button from "../../components/button";

export default function Inicio() {
    return (
        <>
            <Main>
                <div className="filter">
                    <Header width="800px" />

                    <h1 className="h1_title typing">
                        Casa acolhedora <br /> irmã Antônia
                    </h1>

                    <p>
                        Organização dedicada a oferecer atendimento e
                        acolhimento para pessoas que se encontram em situação de
                        vulnerabilidade social ou risco.
                    </p>

                    <h4 className="h4_subtitle">Conheça a orgânização</h4>
                </div>
            </Main>
            <Section className="secao-padrao">
                <h2 className="h2_bebasneue ">NOSSOS PILARES</h2>

                <div className="article-pilar ">
                    <div>
                        <h3 className="h3_bebasneue slide-in">
                            Casa irmã antônia
                        </h3>
                        <p>
                            Organização localizada na cidade de Jaguariúna
                            dedicada a oferecer atendimento e acolhimento para
                            homens, mulheres e famílias que se encontram em
                            situação de vulnerabilidade social ou risco.
                        </p>
                        <span>veja sobre</span>
                    </div>
                    <img src={imgmorador} className="section-img pulse" />
                </div>

                <div className="article-pilar">
                    <div>
                        <h3 className="h3_bebasneue slide-in">
                            Casa das crianças
                        </h3>
                        <p>
                            Organização localizada na cidade de Jaguariúna
                            dedicada a oferecer atendimento e acolhimento para
                            homens, mulheres e famílias que se encontram em
                            situação de vulnerabilidade social ou risco.
                        </p>
                        <span>veja sobre</span>
                    </div>
                    <img src={imgcrianca} className="section-img pulse" />
                </div>

                <div className="article-pilar">
                    <div>
                        <h3 className="h3_bebasneue slide-in">
                            centro de Tratamento feminino
                        </h3>
                        <p>
                            Organização localizada na cidade de Jaguariúna
                            dedicada a oferecer atendimento e acolhimento para
                            homens, mulheres e famílias que se encontram em
                            situação de vulnerabilidade social ou risco.
                        </p>
                        <span>veja sobre</span>
                    </div>
                    <img src={imgmulheres} className="section-img pulse" />
                </div>
            </Section>
            <Divisor>
                <h3 className="h3_bebasneue">
                    Em 2023 o número de moradores de rua triplicou
                </h3>
            </Divisor>
            <SectionMissaoValores className="secao-padrao">
                <h2 className="h2_bebasneue ">MISSÕES E VALORES</h2>
                <div>
                    <img src={img} alt="" />
                    <div>
                        <div className="missao-valores">
                            <h3 className="h3_bebasneue slide-in">
                                Acolhimento e Respeito à Diversidade:
                            </h3>
                            <p>
                                Oferecemos um ambiente seguro e respeitoso para
                                pessoas em situação de rua, respeitando
                                costumes, tradições, grupo familiar, raça/etnia,
                                identidade de gênero, orientação sexual e
                                religião.
                            </p>
                        </div>
                        <div className="missao-valores">
                            <h3 className="h3_bebasneue slide-in">
                                Serviços Essenciais:
                            </h3>
                            <p>
                                Proporcionamos condições de estadia, convívio,
                                endereço de referência, repouso, guarda de
                                pertences, higiene pessoal e vestuário, sempre
                                em ambientes agradáveis e aconchegantes.
                            </p>
                        </div>
                        <div className="missao-valores">
                            <h3 className="h3_bebasneue slide-in">
                                Participação e Autonomia:
                            </h3>
                            <p>
                                Promovemos a participação ativa dos usuários na
                                gestão e organização do espaço, garantindo que
                                se sintam corresponsáveis pelas tarefas
                                cotidianas, sem assumir responsabilidades pela
                                limpeza.
                            </p>
                        </div>
                        <Button color={"#ffffcc"} link={"/doacao"}>
                            MAIS DETALHES
                        </Button>
                    </div>
                </div>
                <img src={imgDoacao} alt="" />
            </SectionMissaoValores>
        </>
    );
}
