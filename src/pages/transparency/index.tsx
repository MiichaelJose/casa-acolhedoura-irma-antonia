import { Main } from "./styles";

import Header from "../../components/header";
import Footer from "../../components/footer";

import iconFilter from "/arrow-down-wide-short-solid.svg";
import iconDocument from "/file-lines-regular.svg";

export default function Transparency() {
    return (
        <>
            <Header />
            <Main className="secao-padrao">
                <h2 className="h2_montserrat">TRANSPARÊNCIA</h2>

                <section>
                    <div className="filtro">
                        <button>
                            <img src={iconFilter} alt="" className="icon" />
                            <span>FILTRAR</span>
                        </button>
                    </div>
                    <div className="filter-modal"></div>
                    <div className="area-cards">
                        <h3 className="h3_montserrat">PRESTAÇÃO DE CONTAS</h3>
                        <div className="grid-card">
                            <div className="card">
                                <div>
                                    <p>RESULTADO DO EXERCÍCIO</p>
                                </div>
                                <img
                                    src={iconDocument}
                                    alt=""
                                    className="icon"
                                />

                                <a href="https://drive.google.com/file/d/1ewKacaqyYnKlL2NPnxFvqrZZ1hn_WEnt/view?usp=drive_link">
                                    <button>VISUALIZAR</button>
                                </a>
                            </div>

                            <div className="card">
                                <div>
                                    <p>RP 10 SEGUNDO TRIMESTRE 2024</p>
                                </div>
                                <img
                                    src={iconDocument}
                                    alt=""
                                    className="icon"
                                />

                                <a href="https://drive.google.com/file/d/1tWl5ZYbVJWV0zSjAJ-LTBhtGQVZwcXl_/view?usp=sharing">
                                    <button>VISUALIZAR</button>
                                </a>
                            </div>

                            <div className="card">
                                <div>
                                    <p>RELATÓRIO FINANCEIRO</p>
                                </div>
                                <img
                                    src={iconDocument}
                                    alt=""
                                    className="icon"
                                />

                                <a href="https://drive.google.com/file/d/1tWl5ZYbVJWV0zSjAJ-LTBhtGQVZwcXl_/view?usp=sharing">
                                    <button>VISUALIZAR</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-content">
                    <h3 className="h3_montserrat">DOCUMENTO</h3>
                    <div className="principal-content">
                        <div className="card">
                            <div>
                                <p>ATA E ESTATUTO</p>
                            </div>

                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/10gqYEK9IHBXiNaH2DI8jjnbDs5ZMiFLb/view?usp=drive_link">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>PROJETO</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/14yu-ruZvkIRPcibegJpxaacRaLE5PJ-L/view?usp=drive_link">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>ESTATUTO</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1wvShCUkPNaIhBN8ZEx2rKXzjW4gmi9LY/view?usp=drive_link">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>ATA ASSEMBLEIA</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1ZlbS29IkgejfFPFycHJh69JqRNZ748BR/view">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>ATA ASSEMBLEIA GERAL</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1lPjvwgRR6adgnRDvEY4i7ScN8UJtKyVE/view">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>REGISTRO DE IMÓVEL</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1TETaoNT0SYC_uDVRtwVV8FskU2EwoLCE/view">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>DECLARAÇÂO DE UTILIZADE PUBLICA</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/18vu5crszhtaiOF7XBQR90IXgeWlShq5M/view">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>REGULAMENTO DE CONTRATAÇÃO.1</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1EyqBvDiqI7BA2mfkQHVI_2gIk3yCBdc-/view?usp=sharing">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>DECLARAÇÃO DE NÃO REMUNERAÇÃO</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1shWBi_u1XQfp4A9JCsPKSAe7tOuyU5UL/view?usp=sharing">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>RELAÇÂO DE FUNCIONÁRIOS E PAGAMENTOS</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1xFy-tPe_IS8aUXZKe5GKZMpOB_mLfV0f/view?usp=sharing">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                        <div className="card">
                            <div>
                                <p>TERMO DE COLABORAÇÃO</p>
                            </div>
                            <img src={iconDocument} alt="" className="icon" />

                            <a href="https://drive.google.com/file/d/1DCD0baUtd83ApyNxFrSc-ZCQl0rNCHki/view">
                                <button>VISUALIZAR</button>
                            </a>
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
}
