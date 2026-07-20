import api from "./api";

import type { Pessoa } from "../interfaces/Pessoa";
import type { ResumoFinanceiro } from "../interfaces/ResumoFinanceiro";

export async function listarPessoas(): Promise<Pessoa[]> {
  const response = await api.get("/api/Pessoa");
  return response.data;
}

export async function criarPessoa(
  pessoa: Omit<Pessoa, "id">
): Promise<Pessoa> {
  const response = await api.post("/api/Pessoa", pessoa);
  return response.data;
}

export async function excluirPessoa(id: number): Promise<void> {
  await api.delete(`/api/Pessoa/${id}`);
}

export async function consultarTotais(): Promise<ResumoFinanceiro> {
  const response = await api.get("/api/Pessoa/totais");
  return response.data;
}