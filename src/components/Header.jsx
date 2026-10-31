
import React from "react";
import { Lightbulb } from "lucide-react";

function Header() {
  return (
    <header>
      <h1>
        <Lightbulb size={32} strokeWidth={2.5} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;

