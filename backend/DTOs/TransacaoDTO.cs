namespace backend.DTOs;

public class TransacaoDTO
{
    public int Id { get; set; }

    public string Descricao { get; set; } = string.Empty;

    public decimal Valor { get; set; }

    public int Tipo { get; set; }

    public int PessoaId { get; set; }

    public string Pessoa { get; set; } = string.Empty;
}