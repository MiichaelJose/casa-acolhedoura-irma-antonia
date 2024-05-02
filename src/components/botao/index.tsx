import { Botao } from "./styles"

interface ButtonProps {
    children: string;
    color: string;
}

export default function Button({ children, color }: ButtonProps) {
    return (
        <Botao to={'/'} backgroundColor={color}>{children}</Botao>
    );
}