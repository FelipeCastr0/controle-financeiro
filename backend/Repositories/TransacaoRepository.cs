using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class TransacaoRepository
{
    private readonly AppDbContext _context;

    public TransacaoRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Transacao>> ListarAsync()
    {
        return await _context.Transacoes
            .Include(t => t.Pessoa)
            .ToListAsync();
    }

    public async Task<Transacao?> BuscarPorIdAsync(int id)
    {
        return await _context.Transacoes
            .Include(t => t.Pessoa)
            .FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<Transacao> CriarAsync(Transacao transacao)
    {
        _context.Transacoes.Add(transacao);

        await _context.SaveChangesAsync();

        return transacao;
    }

    public async Task<List<Transacao>> BuscarPorPessoaAsync(int pessoaId)
    {
        return await _context.Transacoes
            .Where(t => t.PessoaId == pessoaId)
            .ToListAsync();
    }

    public async Task RemoverAsync(Transacao transacao)
    {
        _context.Transacoes.Remove(transacao);

        await _context.SaveChangesAsync();
    }

    public async Task<Transacao?> ObterPorIdAsync(int id)
    {
        return await _context.Transacoes.FindAsync(id);
    }
}