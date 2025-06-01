import React from "react";

type PillProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, selected = false, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.5rem 1rem",
      borderRadius: "999px",
      border: selected ? "2px solid #0070f3" : "1px solid #ccc",
      background: selected ? "#e6f0fa" : "#fff",
      color: "#333",
      marginRight: "0.5rem",
      cursor: "pointer",
      fontWeight: selected ? "bold" : "normal",
      outline: "none",
    }}
  >
    {label}
  </button>
);

export default Pill;