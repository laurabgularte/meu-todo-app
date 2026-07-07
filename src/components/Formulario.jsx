import { useState } from "react";

export default function Formulario({ adicionarTarefa }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    adicionarTarefa(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="O que você precisa fazer hoje?"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
