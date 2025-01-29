"use client";

import React from "react";

interface SaveButtonProps {
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onHandleSubmit }) => {
  return (
    <button
      type="submit"
      onClick={onHandleSubmit}
      className="w-full py-2 px-2 mb-5 bg-green-primary hover:bg-green-dark text-white font-semibold rounded-md shadow"
    >
      Save
    </button>
  );
};

export default SaveButton;
