import api from "./api";
import type { Transacao } from "../interfaces/Transacao";

export async function listarTransacoes(): Promise<Transacao[]> {
  const response = await api.get("/api/Transacao");
  return response.data;
}

export async function criarTransacao(
  transacao: Omit<Transacao, "id" | "pessoa">
): Promise<Transacao> {
  const response = await api.post("/api/Transacao", transacao);
  return response.data;
}

export async function excluirTransacao(id: number): Promise<void> {
  await api.delete(`/api/Transacao/${id}`);
}