import { Link } from "./styles"

interface ButtonProps {
    children: string;
    color: string;
    link: string;
}

export default function Button({ children, color, link }: ButtonProps) {
     return <><Link to={link} backgroundcolor={color} className={"btn"}>{children}</Link></>
        
    
}