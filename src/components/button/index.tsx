import { Link } from "./styles";

type ButtonProps = {
    children: string;
    color: string;
    link: string;
};

export default function Button({ children, color, link }: ButtonProps) {
    return (
        <Link
            to={link}
            backgroundcolor={color}
            reloadDocument
            className={"btn"}
        >
            {children}
        </Link>
    );
}
