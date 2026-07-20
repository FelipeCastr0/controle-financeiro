using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly PessoaService _service;

    public PessoaController(PessoaService service)
    {
        _service = service;
    }

[HttpGet]
public async Task<ActionResult<List<Pessoa>>> Listar()
{
    return Ok(await _service.ListarAsync());
}

[HttpGet("totais")]
public async Task<IActionResult> ConsultarTotais()
{
    return Ok(await _service.ConsultarTotaisAsync());
}

[HttpPost]
public async Task<ActionResult<Pessoa>> Criar(Pessoa pessoa)
{
    var novaPessoa = await _service.CriarAsync(pessoa);

    return Ok(novaPessoa);
}

[HttpDelete("{id}")]
public async Task<IActionResult> Remover(int id)
{
    await _service.RemoverAsync(id);

    return NoContent();
}
}