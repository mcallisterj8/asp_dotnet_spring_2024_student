
namespace PlotPocket.Server.Models.Dtos;

public class ShowDto {
    public int Id { get; set; } = 0;
    public int ShowApiId { get; set; }
    public string Type { get; set; }
    public string Title { get; set; }
    public DateTime? Date { get; set; }
    public bool IsBookmarked { get; set; } = false;
    public string PosterPath { get; set; }    

}
