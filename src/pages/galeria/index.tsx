import Header from "../../components/cabecalho";
import Button from "../../components/botao";

import { Main } from "./styles";
import Footer from "../../components/rodape";

export default function Galery() {
    return (
        <>
            <Header />
            <Main className="secao-padrao">
                <h2>Galeria de fotos</h2>

                <div className="galeria">
                    <img src={"/g1.jpg"} alt="" />
                    <img src={"/g2.jpg"} alt="" />
                    <img src={"/g5.jpg"} alt="" />
                    <img src={"/g4.jpg"} alt="" />
                    <img src={"/g6.jpeg"} alt="" />
                    <img src={"/g7.jpeg"} alt="" />
                </div>

                <div className="botoes">
                    <Button link="1" color={"#98FB98"}>
                        FAÇA UMA DOAÇÃO
                    </Button>
                    <Button link="1" color={"#FFFFCC"}>
                        SEJA VOLUNTÁRIO
                    </Button>
                </div>
            </Main>
            <Footer />
        </>
    );
}
