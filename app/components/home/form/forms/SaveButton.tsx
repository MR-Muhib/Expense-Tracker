"use client";

import React from "react";

const SaveButton: React.FC = () => {
  return (
    <>
      <button
        type="submit"
        className="w-full py-2 px-2 bg-green-primary hover:bg-green-dark text-white font-semibold rounded-md shadow"
      >
        Save
      </button>
    </>
  );
};

export default SaveButton;
