import Header from "../../components/header";
import Button from "../../components/button";
import Footer from "../../components/footer";

import { Main } from "./styles";

export default function Galery() {
    return (
        <>
            <Header />
            <Main className="secao-padrao">
                <h2 className="h2_montserrat">GALERIA DE FOTOS</h2>

                <div className="galeria">
                    <img src={"/galery/g1.jpg"} alt="" />
                    <img src={"/galery/g2.jpg"} alt="" />
                    <img src={"/galery/g5.jpg"} alt="" />
                    <img src={"/galery/g4.jpg"} alt="" />
                    <img src={"/galery/g6.jpeg"} alt="" />
                    <img src={"/galery/g7.jpeg"} alt="" />
                </div>

                <div className="botoes" style={{ display: "none" }}>
                    <Button link="/doacao" color={"#b4f6b4"}>
                        FAÇA UMA DOAÇÃO
                    </Button>
                    <Button link="/doacao" color={"#FFFFCC"}>
                        SEJA VOLUNTÁRIO
                    </Button>
                </div>
            </Main>
            <Footer />
        </>
    );
}
