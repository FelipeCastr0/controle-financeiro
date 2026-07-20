import type { Transacao } from "../interfaces/Transacao";
import { excluirTransacao } from "../services/transacaoService";

interface Props {
  transacoes: Transacao[];
  onAtualizar: () => void;
}

function TransacaoList({ transacoes, onAtualizar }: Props) {
  async function remover(id: number) {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta transação?"
    );

    if (!confirmar) return;

    try {
      await excluirTransacao(id);
      onAtualizar();
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir transação.");
    }
  }

  if (transacoes.length === 0) {
    return <p>Nenhuma transação cadastrada.</p>;
  }

  return (
    <table
      border={1}
      cellPadding={8}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Pessoa</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {transacoes.map((transacao) => (
          <tr key={transacao.id}>
            <td>{transacao.descricao}</td>

            <td>
              {transacao.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>

            <td>
              {transacao.tipo === 0 ? "Receita" : "Despesa"}
            </td>

            <td>{transacao.pessoa}</td>

            <td>
              <button
                onClick={() => remover(transacao.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransacaoList;