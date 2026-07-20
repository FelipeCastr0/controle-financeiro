using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class PessoaRepository
{
    private readonly AppDbContext _context;

    public PessoaRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Pessoa>> ListarAsync()
    {
        return await _context.Pessoas
            .Include(p => p.Transacoes)
            .ToListAsync();
    }

    public async Task<Pessoa?> BuscarPorIdAsync(int id)
    {
        return await _context.Pessoas
            .Include(p => p.Transacoes)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<Pessoa> CriarAsync(Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);

        await _context.SaveChangesAsync();

        return pessoa;
    }

    public async Task RemoverAsync(Pessoa pessoa)
    {
        _context.Pessoas.Remove(pessoa);

        await _context.SaveChangesAsync();
    }

    public async Task<Pessoa?> ObterPorIdAsync(int id)
    {
        return await _context.Pessoas.FindAsync(id);
    }
}