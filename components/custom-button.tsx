"use client";
import { useFormStatus } from "react-dom";

const CustomButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-gray-300 p-2 bg-white text-black disabled:text-gray-400 disabled:border-gray-400"
      disabled={pending}
      type="submit"
    >
      Submit
    </button>
  );
};

export default CustomButton;
