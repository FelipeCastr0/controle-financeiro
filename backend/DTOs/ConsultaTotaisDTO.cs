namespace backend.DTOs;

public class ConsultaTotaisDTO
{
    public List<PessoaResumoDTO> Pessoas { get; set; } = new();

    public ResumoGeralDTO Resumo { get; set; } = new();
}