import { CaretForwardOutline } from "react-ionicons";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProps {
  whiteButton?: boolean;
  transparentButton?: boolean;
  greenButton?: boolean;  // Added greenButton prop
  children: any;
  className?: string;
}

const Button = ({
  whiteButton = false,
  children,
  className = "",
  transparentButton = false,
  greenButton = false, // Handle the green button option
}: ButtonProps) => {
  return (
    <button
      className={`outline-none ${
        whiteButton
          ? "bg-white"
          : transparentButton
          ? "bg-transparent"
          : greenButton
          ? "bg-green-500" // Apply green button color here
          : "bg-secondary"
      } rounded-[14px] w-fit px-5 h-[60px] flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${className}`}
    >
      <span
        className={`${
          whiteButton || transparentButton
            ? "text-secondary"
            : greenButton
            ? "text-white" // Make text white for the green button
            : "text-white"
        } font-Urbanist font-semibold text-lg`}
      >
        {children}
      </span>
      <CaretForwardOutline
        cssClasses={`${
          whiteButton || transparentButton
            ? "!text-secondary !fill-secondary"
            : greenButton
            ? "!text-white !fill-white" // Icon color change for green button
            : "!text-white !fill-white"
        }`}
      />
    </button>
  );
};

export default Button;
