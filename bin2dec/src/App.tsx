import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

const dadosFormulario = {
  numeroBinario: "",
  numeroDecimal: "",
};

const App: React.FC = () => {
  const [camposFormulario, setCamposFormulario] = useState(dadosFormulario);

  const handleInput = (event: InputProps) => {
    if (event.target.id === "numeroBinario" && event.target.validity.valid) {
      const numeroBinario = event.target.value;
      const numeroDecimal = parseInt(numeroBinario, 2).toString();
      setCamposFormulario({ numeroBinario, numeroDecimal });
    }
  };

  return (
    <div id="container">
      <Input
        id={"numeroBinario"}
        label={"O número binário"}
        value={camposFormulario.numeroBinario}
        onChange={handleInput}
        pattern="[0-1]*"
        maxLength={8}
      />

      <br />

      <Input
        id={"numeroDecimal"}
        label={"O número decimal"}
        value={camposFormulario.numeroDecimal}
        onChange={handleInput}
        readOnly
      />
    </div>
  );
};

export default App;
