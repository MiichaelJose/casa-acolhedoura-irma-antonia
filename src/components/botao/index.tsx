import { Link } from "./styles"

interface ButtonProps {
    children: string;
    color: string;
}

export default function Button({ children, color }: ButtonProps) {
    return (
    <Link to={'/'} backgroundcolor={color} className={"btn"}>{children}</Link>
    );
}