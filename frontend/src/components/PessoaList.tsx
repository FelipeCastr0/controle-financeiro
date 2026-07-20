import type { Pessoa } from "../interfaces/Pessoa";
import { excluirPessoa } from "../services/pessoaService";

interface Props {
  pessoas: Pessoa[];
  onAtualizar: () => void;
}

function PessoaList({ pessoas, onAtualizar }: Props) {
  async function remover(id: number) {
    const confirmar = window.confirm("Deseja realmente excluir esta pessoa?");

    if (!confirmar) return;

    try {
      await excluirPessoa(id);
      onAtualizar();
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir pessoa.");
    }
  }

  if (pessoas.length === 0) {
    return <p>Nenhuma pessoa cadastrada.</p>;
  }

  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {pessoas.map((pessoa) => (
          <tr key={pessoa.id}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.idade}</td>
            <td>
              <button onClick={() => remover(pessoa.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PessoaList;