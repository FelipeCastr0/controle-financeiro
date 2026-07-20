using backend.DTOs;
using backend.Models;
using backend.Repositories;

namespace backend.Services;

public class PessoaService
{
    private readonly PessoaRepository _repository;

    public PessoaService(PessoaRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Pessoa>> ListarAsync()
    {
        return await _repository.ListarAsync();
    }

    public async Task<Pessoa?> BuscarPorIdAsync(int id)
    {
        return await _repository.BuscarPorIdAsync(id);
    }

    public async Task<Pessoa> CriarAsync(Pessoa pessoa)
    {
        return await _repository.CriarAsync(pessoa);
    }

    public async Task RemoverAsync(int id)
    {
        var pessoa = await _repository.BuscarPorIdAsync(id);

        if (pessoa == null)
            throw new Exception("Pessoa não encontrada.");

        await _repository.RemoverAsync(pessoa);
    }

    public async Task<ConsultaTotaisDTO> ConsultarTotaisAsync()
    {
        var pessoas = await _repository.ListarAsync();

        var resultado = new ConsultaTotaisDTO();

        foreach (var pessoa in pessoas)
        {
            foreach (var t in pessoa.Transacoes)
            {
                Console.WriteLine(
                    $"Descrição: {t.Descricao} | Tipo: {t.Tipo} | Valor inteiro: {(int)t.Tipo}"
                );
            }

        var totalReceitas = pessoa.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Receita)
            .Sum(t => t.Valor);

        var totalDespesas = pessoa.Transacoes
            .Where(t => t.Tipo == TipoTransacao.Despesa)
            .Sum(t => t.Valor);

            resultado.Pessoas.Add(new PessoaResumoDTO
            {
                Id = pessoa.Id,
                Nome = pessoa.Nome,
                TotalReceitas = totalReceitas,
                TotalDespesas = totalDespesas,
                Saldo = totalReceitas - totalDespesas
            });
        }

        resultado.Resumo.TotalReceitas =
            resultado.Pessoas.Sum(p => p.TotalReceitas);

        resultado.Resumo.TotalDespesas =
            resultado.Pessoas.Sum(p => p.TotalDespesas);

        resultado.Resumo.SaldoLiquido =
            resultado.Resumo.TotalReceitas -
            resultado.Resumo.TotalDespesas;

        return resultado;
    }
}