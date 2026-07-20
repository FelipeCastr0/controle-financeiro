import { useEffect, useState } from "react";

import type { Pessoa } from "./interfaces/Pessoa";
import type { Transacao } from "./interfaces/Transacao";

import { listarPessoas } from "./services/pessoaService";
import { listarTransacoes } from "./services/transacaoService";

import PessoaForm from "./components/PessoaForm";
import PessoaList from "./components/PessoaList";

import TransacaoForm from "./components/TransacaoForm";
import TransacaoList from "./components/TransacaoList";

import ResumoFinanceiro from "./components/ResumoFinanceiro";

function App() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  // Controla a atualização do resumo financeiro
  const [atualizarResumo, setAtualizarResumo] = useState(0);

  async function carregarPessoas() {
    try {
      const dados = await listarPessoas();
      setPessoas(dados);
    } catch (error) {
      console.error(error);
    }
  }

  async function carregarTransacoes() {
    try {
      const dados = await listarTransacoes();
      setTransacoes(dados);
    } catch (error) {
      console.error(error);
    }
  }

  function atualizarTela() {
    carregarPessoas();
    carregarTransacoes();

    // Força o ResumoFinanceiro a recarregar
    setAtualizarResumo((valor) => valor + 1);
  }

  useEffect(() => {
    atualizarTela();
  }, []);

  return (
    <div className="container">

      <h1>Controle de Gastos</h1>

      <section>
        <ResumoFinanceiro atualizar={atualizarResumo} />
      </section>

      <div className="forms-grid">

        <section>

          <h2>Cadastro de Pessoa</h2>

          <PessoaForm
            onPessoaCriada={atualizarTela}
          />

        </section>

        <section>

          <h2>Cadastro de Transação</h2>

          <TransacaoForm
            pessoas={pessoas}
            onTransacaoCriada={atualizarTela}
          />

        </section>

      </div>

      <section>

        <h2>Pessoas cadastradas</h2>

        <PessoaList
          pessoas={pessoas}
          onAtualizar={atualizarTela}
        />

      </section>

      <section>

        <h2>Transações cadastradas</h2>

        <TransacaoList
          transacoes={transacoes}
          onAtualizar={atualizarTela}
        />

      </section>

    </div>
  );
}

export default App;