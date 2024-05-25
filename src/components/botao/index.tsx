import { Link } from "./styles";

interface ButtonProps {
  children: string;
  color: string;
  link: string;
}

export default function Button({ children, color, link }: ButtonProps) {
  let href: string = "";

  if (link == "1") {
    href = "/quem-somos";
  }

  return (
    <Link to={href} backgroundcolor={color} className={"btn"}>
      {children}
    </Link>
  );
}
