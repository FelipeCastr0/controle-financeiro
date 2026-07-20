using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly TransacaoService _service;

    public TransacaoController(TransacaoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<List<Transacao>>> Listar()
    {
        return Ok(await _service.ListarAsync());
    }

    [HttpPost]
    public async Task<ActionResult<Transacao>> Criar(Transacao transacao)
    {
        var novaTransacao = await _service.CriarAsync(transacao);

        return Ok(novaTransacao);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Remover(int id)
    {
        await _service.RemoverAsync(id);

        return NoContent();
    }
}