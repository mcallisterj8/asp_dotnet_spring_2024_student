using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlotPocket.Server.Services;
using PlotPocket.Server.Models.Responses;
using PlotPocket.Server.Models.Dtos;

namespace PlotPocket.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrendingController : ControllerBase {
        private readonly TMDBService _tmdbService;
        private readonly ShowService _showService;

        public TrendingController(TMDBService tmdbService, ShowService showService) {
            _tmdbService = tmdbService;
            _showService = showService;
        }    

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTrendingShows(){
            TrendingResponse trendingShowsResp = await _tmdbService.GetTrendingShowsAsync();
            List<Trending> trendingShows = trendingShowsResp.Results;

            List<ShowDto> showDtos = trendingShows.Select(show => 
                                                            _showService.MediaItemToShowDto(show))
                                                            .ToList();

            return Ok(showDtos);
        }

    }
}
