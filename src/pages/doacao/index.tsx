import Header from "../../components/cabecalho";

import { Main } from "./styles";

import iconPix from "/icons8-foto.svg";
import iconBanco from "/banco.png";

export default function Donation() {
    return (
        <>
            <Header />
            <Main className="secao-padrao">
                <h2>FAÇA UMA DOAÇÃO</h2>
                <div className="subtitle">
                    <h3>AJUDE COM QUALQUER QUANTIA</h3>

                    <p>
                        Você pode doar alimentos, roupas e materiais de higiene!
                        O ponto de entrega é no
                        <br /> R. Mal. Floriano Peixoto, 443 - Jardim Berlim,
                        Jaguariúna - SP, 13820-000
                    </p>
                </div>

                <div className="donation">
                    <div>
                        <img src={iconBanco} alt="iconbanco" className="" />
                        <h4>BANCO</h4>
                        <p>
                            utilize o contato do banco para
                            <br />
                            fazer uma doação
                        </p>
                        <p>conta-corrente: 24214224</p>
                        <p>agencia: 24214224</p>
                    </div>

                    <div>
                        <img src={iconPix} alt="iconpix" />
                        <h4>PIX</h4>
                        <p>utilize o pix para fazer uma doação</p>
                        <p>chave: 032.294.514-04</p>
                    </div>
                </div>
            </Main>
        </>
    );
}
