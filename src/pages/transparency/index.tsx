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
                    <h3 className="h3_montserrat">DOCUMENTOS ANO 2024</h3>
                    <div className="area-cards">
                        <h4>MAIO</h4>
                        <div className="grid-card">
                            <div className="card">
                                <div>
                                    <p>Transparência</p>
                                </div>
                                <p>DIA 26/05</p>
                                <img
                                    src={iconDocument}
                                    alt=""
                                    className="icon"
                                />

                                <a href="https://drive.google.com/file/d/1ewKacaqyYnKlL2NPnxFvqrZZ1hn_WEnt/view?usp=drive_link">
                                    <button>VISUALIZAR</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-content">
                    <h3 className="h3_montserrat">PRINCIPAL</h3>
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
                                <p>REGISTRO DE IMOVEL</p>
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
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
}
