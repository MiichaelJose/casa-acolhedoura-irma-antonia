import { Link } from "./styles"

interface ButtonProps {
    children: string;
    color: string;
    link: string;
}

export default function Button({ children, color, link, ...rest }: ButtonProps) {
    return (
    <Link to={link} backgroundcolor={color} className={"btn"} {...rest}>{children}</Link>
    );
}