import { Main, Section } from "./styles";

import Header from "../../components/header";

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
                <h2 className="h2_bebasneue ">nossos pilares</h2>

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
                    <img
                        src="/public/morador-cinza.jpg"
                        className="section-img pulse"
                    />
                </div>

                <div className="article-pilar">
                    <div>
                        <h3 className="h3_bebasneue fade-in">
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
                    <img
                        src="/public/crianca-cinza.jpg"
                        className="section-img pulse"
                    />
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
                    <img
                        src="/public/mulheres-cinza.png"
                        className="section-img"
                    />
                </div>
            </Section>
        </>
    );
}
