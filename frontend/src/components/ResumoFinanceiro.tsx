import { useEffect, useState } from "react";

import { consultarTotais } from "../services/pessoaService";
import type { ResumoFinanceiro as ResumoFinanceiroDTO } from "../interfaces/ResumoFinanceiro";

interface Props {
  atualizar: number;
}

function ResumoFinanceiro({ atualizar }: Props) {
  const [dados, setDados] = useState<ResumoFinanceiroDTO>();

  async function carregarResumo() {
    try {
      const resumo = await consultarTotais();
      setDados(resumo);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    carregarResumo();
  }, [atualizar]);

  if (!dados) return <p>Carregando...</p>;

  return (
    <>
      <h2>Resumo Financeiro</h2>

      <div className="dashboard">

        <div className="card receita">
          <span>Receitas</span>

          <h3>
            {dados.resumo.totalReceitas.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>

        <div className="card despesa">
          <span>Despesas</span>

          <h3>
            {dados.resumo.totalDespesas.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>

        <div className="card saldo">
          <span>Saldo</span>

          <h3>
            {dados.resumo.saldoLiquido.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>

      </div>

      <br />

      <h3>Resumo por Pessoa</h3>

      <table>

        <thead>
          <tr>
            <th>Pessoa</th>
            <th>Receitas</th>
            <th>Despesas</th>
            <th>Saldo</th>
          </tr>
        </thead>

        <tbody>

          {dados.pessoas.map((pessoa) => (
            <tr key={pessoa.id}>

              <td>{pessoa.nome}</td>

              <td>
                {pessoa.totalReceitas.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>

              <td>
                {pessoa.totalDespesas.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>

              <td>
                {pessoa.saldo.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </>
  );
}

export default ResumoFinanceiro;