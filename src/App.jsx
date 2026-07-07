import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import "./App.css";

export default function App() {
  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem("tarefas");
    return salvas ? JSON.parse(salvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  };

  const deletarTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>
      <Formulario adicionarTarefa={adicionarTarefa} />
      <Lista
        tarefas={tarefas}
        alternarConclusao={alternarConclusao}
        deletarTarefa={deletarTarefa}
      />
    </div>
  );
}
