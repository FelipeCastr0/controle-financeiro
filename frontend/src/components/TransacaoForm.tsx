import { useState } from "react";

import type { Pessoa } from "../interfaces/Pessoa";
import { criarTransacao } from "../services/transacaoService";

interface Props {
  pessoas: Pessoa[];
  onTransacaoCriada: () => void;
}

function TransacaoForm({
  pessoas,
  onTransacaoCriada,
}: Props) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<number | "">("");
  const [pessoaId, setPessoaId] = useState<number | "">("");

  async function salvar(e: React.FormEvent) {
    e.preventDefault();

    try {
      await criarTransacao({
        descricao,
        valor: Number(valor),
        tipo: Number(tipo),
        pessoaId: Number(pessoaId),
      });

      setDescricao("");
      setValor("");
      setTipo("");
      setPessoaId("");

      onTransacaoCriada();
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data ??
          "Erro ao cadastrar transação."
      );
    }
  }

  return (
    <form onSubmit={salvar}>

      <div>
        <label>Descrição</label>

        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Informe a descrição"
          required
        />
      </div>

      <div>
        <label>Valor</label>

        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          placeholder="Informe o valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Tipo</label>

        <select
          value={tipo}
          onChange={(e) => setTipo(Number(e.target.value))}
          required
        >
          <option value="" disabled>
            Selecione o tipo
          </option>

          <option value={0}>Receita</option>
          <option value={1}>Despesa</option>
        </select>
      </div>

      <div>
        <label>Pessoa</label>

        <select
          value={pessoaId}
          onChange={(e) => setPessoaId(Number(e.target.value))}
          required
        >
          <option value="" disabled>
            Selecione uma pessoa
          </option>

          {pessoas.map((pessoa) => (
            <option
              key={pessoa.id}
              value={pessoa.id}
            >
              {pessoa.nome}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">
        Cadastrar Transação
      </button>

    </form>
  );
}

export default TransacaoForm;