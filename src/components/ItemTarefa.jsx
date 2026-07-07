export default function ItemTarefa({
  tarefa,
  alternarConclusao,
  deletarTarefa,
}) {
  return (
    <li className={`item-tarefa ${tarefa.concluida ? "concluida" : ""}`}>
      <span onClick={() => alternarConclusao(tarefa.id)}>{tarefa.texto}</span>
      <button onClick={() => deletarTarefa(tarefa.id)} className="btn-deletar">
        Excluir
      </button>
    </li>
  );
}
