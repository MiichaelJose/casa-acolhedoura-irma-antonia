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
                <h2>TRANSPARÊNCIA</h2>

                <section>
                    <div className="filtro">
                        <button>
                            <img src={iconFilter} alt="" className="icon" />
                            <span>FILTRAR</span>
                        </button>
                    </div>
                    <div className="filter-modal">
                    
                    </div>
                    <h3>DOCUMENTOS ANO 2024</h3>
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

                                <a href="https://drive.google.com/file/d/1wvShCUkPNaIhBN8ZEx2rKXzjW4gmi9LY/view?usp=drive_link"><button>VISUALIZAR</button></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-content">
                    <h3>PRINCIPAL</h3>
                    <div className="card">
                        <div>
                            <p>ATA</p>
                        </div>

                        <img src={iconDocument} alt="" className="icon" />

                        <a href="https://drive.google.com/file/d/10gqYEK9IHBXiNaH2DI8jjnbDs5ZMiFLb/view?usp=drive_link"><button>VISUALIZAR</button></a>
                    </div>
                    <div className="card">
                        <div>
                            <p>PROJETO</p>
                        </div>
                        <img src={iconDocument} alt="" className="icon" />

                        <a href="https://drive.google.com/file/d/14yu-ruZvkIRPcibegJpxaacRaLE5PJ-L/view?usp=drive_link"><button>VISUALIZAR</button></a>
                    </div>
                    <div className="card">
                        <div>
                            <p>ESTATUTO</p>
                        </div>
                        <img src={iconDocument} alt="" className="icon" />

                        <a href="https://drive.google.com/file/d/1wvShCUkPNaIhBN8ZEx2rKXzjW4gmi9LY/view?usp=drive_link"><button>VISUALIZAR</button></a>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
}
