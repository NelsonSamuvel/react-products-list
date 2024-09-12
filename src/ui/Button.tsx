import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  type?: "primary" | "secondary";
};

const Button = ({ children, type = "primary" }: PropsType) => {
  const btnStyles = {
    primary: "",
    secondary: "bg-white py-3 px-8   rounded-full font-semibold border border-stone-400 flex gap-2 mx-auto flex-wrap",
  };

  return <button className={btnStyles[type]}>{children}</button>;
};

export default Button;
