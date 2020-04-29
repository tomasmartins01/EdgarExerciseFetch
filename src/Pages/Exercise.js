import React from "react";
import Dropdown from "../Components/Dropdown";

const items = [
  "Bruno",
  "Pedro",
  "Flávio",
  "Joana",
  "Maria",
  "Diogo",
  "Tomás",
  "Araújo",
  "Edgar",
];

const selected = "Escolhe";

export const Exercise = () => {
  return (
    <div>
      <Dropdown title="Hey" selected={selected} items={items} />
    </div>
  );
};
