export interface PessoaResumo {
  id: number;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface ResumoGeral {
  totalReceitas: number;
  totalDespesas: number;
  saldoLiquido: number;
}

export interface ResumoFinanceiro {
  pessoas: PessoaResumo[];
  resumo: ResumoGeral;
}