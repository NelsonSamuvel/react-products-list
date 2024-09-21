import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  type?: "primary" | "secondary";
  onClick: () => void;
};

const Button = ({ children, type = "primary", onClick }: PropsType) => {
  const btnStyles = {
    primary: "bg-orange-700 px-3  py-2 font-semibold text-white rounded-full w-full",
    secondary: `bg-white py-3 px-2 w-32 justify-center rounded-full font-semibold border border-stone-400 flex gap-2 mx-auto flex-wrap`,
  };

  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className={btnStyles[type]}>
      {children}
    </button>
  );
};

export default Button;
