import api from "./api";

import type { ResumoFinanceiro } from "../interfaces/ResumoFinanceiro";

export async function consultarTotais(): Promise<ResumoFinanceiro> {
  const response = await api.get("/api/Pessoa/totais");
  return response.data;
}