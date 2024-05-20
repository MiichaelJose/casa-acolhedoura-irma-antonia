import { Link } from "./styles"

interface ButtonProps {
    children: string;
    color: string;
    to: any;
}

export default function Button({ children, color, to, ...rest }: ButtonProps) {
    return (
    <Link to={to} backgroundcolor={color} className={"btn"} {...rest}>{children}</Link>
    );
}