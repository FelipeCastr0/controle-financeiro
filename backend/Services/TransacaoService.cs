using backend.DTOs;
using backend.Models;
using backend.Repositories;


namespace backend.Services;

public class TransacaoService
{
    private readonly TransacaoRepository _transacaoRepository;
    private readonly PessoaRepository _pessoaRepository;

    public TransacaoService(
        TransacaoRepository transacaoRepository,
        PessoaRepository pessoaRepository)
    {
        _transacaoRepository = transacaoRepository;
        _pessoaRepository = pessoaRepository;
    }

    public async Task<List<TransacaoDTO>> ListarAsync()
    {
        var transacoes = await _transacaoRepository.ListarAsync();

        return transacoes.Select(t => new TransacaoDTO
        {
            Id = t.Id,
            Descricao = t.Descricao,
            Valor = t.Valor,
            Tipo = (int)t.Tipo,
            PessoaId = t.PessoaId,
            Pessoa = t.Pessoa?.Nome ?? ""
        }).ToList();
    }

    public async Task<Transacao> CriarAsync(Transacao transacao)
    {
        var pessoa = await _pessoaRepository.ObterPorIdAsync(transacao.PessoaId);

        if (pessoa == null)
            throw new Exception("Pessoa não encontrada.");
        
        if (transacao.Valor <= 0)
            throw new Exception("O valor da transação deve ser maior que zero.");

        if (pessoa.Idade < 18 && transacao.Tipo == TipoTransacao.Receita)
            throw new Exception("Menores de idade podem cadastrar apenas despesas.");

        return await _transacaoRepository.CriarAsync(transacao);
    }

    public async Task RemoverAsync(int id)
    {
        var transacao = await _transacaoRepository.ObterPorIdAsync(id);

        if (transacao == null)
            throw new Exception("Transação não encontrada.");

        await _transacaoRepository.RemoverAsync(transacao);
    }
}