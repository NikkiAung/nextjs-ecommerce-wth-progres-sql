"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
type CustomButtonProps = {
  name: string;
};

const CustomButton = ({ name }: CustomButtonProps) => {
  const { pending } = useFormStatus();
  const baseClass =
    " font-medium disabled:text-gray-400 disabled:border-gray-400";

  const className =
    name === "Delete"
      ? clsx("p-1 rounded-lg bg-red-500 text-white", baseClass)
      : clsx("border border-gray-300 p-2 bg-white text-black", baseClass);
  return (
    <button className={className} disabled={pending} type="submit">
      {name ? name : "default"}
    </button>
  );
};

export default CustomButton;
