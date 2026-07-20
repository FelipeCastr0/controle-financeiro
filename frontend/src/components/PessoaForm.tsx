import { useState } from "react";
import { criarPessoa } from "../services/pessoaService";

interface Props {
  onPessoaCriada: () => void;
}

function PessoaForm({ onPessoaCriada }: Props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  async function salvar(e: React.FormEvent) {
    e.preventDefault();

    try {
      await criarPessoa({
        nome,
        idade: Number(idade),
      });

      setNome("");
      setIdade("");

      onPessoaCriada();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar pessoa.");
    }
  }

  return (
    <form onSubmit={salvar}>

      <div>
        <label>Nome</label>

        <input
          type="text"
          placeholder="Informe o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Idade</label>

        <input
          type="number"
          inputMode="numeric"
          min="0"
          max="150"
          placeholder="Informe a idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Cadastrar Pessoa
      </button>

    </form>
  );
}

export default PessoaForm;