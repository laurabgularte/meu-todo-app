import ItemTarefa from "./ItemTarefa";

export default function Lista({ tarefas, alternarConclusao, deletarTarefa }) {
  if (tarefas.length === 0) {
    return <p className="lista-vazia">Nenhuma tarefa por aqui ainda!</p>;
  }

  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          alternarConclusao={alternarConclusao}
          deletarTarefa={deletarTarefa}
        />
      ))}
    </ul>
  );
}
