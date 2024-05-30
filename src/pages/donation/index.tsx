import Header from "../../components/header";

import { Main } from "./styles";

import iconPix from "/icons8-foto.svg";
import iconBanco from "/sicredi-logo.png";

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
                            utilize a conta do banco para
                            <br />
                            fazer uma doação
                        </p>
                        <p>conta-corrente: 24524-0</p>
                        <p>agencia: 3027</p>
                    </div>

                    <div>
                        <img src={iconPix} alt="iconpix" />
                        <h4>PIX</h4>
                        <p>utilize o pix para fazer uma doação</p>
                        <p>CNPJ</p>
                        <p>chave: 40.110.156/0001-40</p>
                    </div>
                </div>
            </Main>
        </>
    );
}
