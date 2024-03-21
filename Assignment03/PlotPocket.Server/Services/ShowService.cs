using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using PlotPocket.Server.Data;
using PlotPocket.Server.Models.Dtos;
using PlotPocket.Server.Models.Responses;

namespace PlotPocket.Server.Services;

public class ShowService {
    /*
        TODO:
        Declare appropriate instance variables needed to:
            - Access the appsettings.json coniguration file so as to reach the
                TMDB property we created there.
    */
    private readonly IConfiguration _config; // Accesses appsettings.json
    private readonly string _secureBaseUrl; // Convenience variable
    private readonly string _posterPathImgSize; // Convenience variable

    public ShowService(IConfiguration config) {
        _config = config;
        _secureBaseUrl = _config.GetValue<string>("TMDB:Images:SecureBaseUrl") ?? "";
        _posterPathImgSize = _config.GetValue<string>("TMDB:Images:PosterSizes:Large") ?? "";
    }

    /**
     * Below can be used for converting return objects from the Trending endpoints 
     * to ShowDtos. 
     * 
     * TODO: Make sure to fill in the ShowDto properties on the return of this method.
     *          You should **NOT** need to modify anything else.
     * 
     **/
    public ShowDto MediaItemToShowDto(ApiMediaItem mediaItem) {
        string? dateToParse = mediaItem switch {
            // Movie movie => movie.ReleaseDate,
            // TvShow tvShow => tvShow.FirstAirDate,
            Trending trendingShow => trendingShow.ReleaseDate ?? trendingShow.FirstAirDate,
            _ => null
        };

        var date = DateTime.TryParse(dateToParse, out DateTime parsedDate) ? parsedDate : (DateTime?)null;        
        
        string? title;
        if(mediaItem is Trending trendingMedia) {
            title = trendingMedia.MediaType == "movie" ? trendingMedia.Title : trendingMedia?.Name;

        } else {
            // title = (mediaItem as Movie)?.Title ?? (mediaItem as TvShow)?.Name;
            title = "NEED TO IMPLEMENT";
        }

        return new ShowDto {
            Id = mediaItem.Id,
            Type = mediaItem is Trending trendingItem ? trendingItem.MediaType : (mediaItem is Movie ? "Movie" : "TV Show"),
            Title = title,
            Date = date,
            PosterPath = $"{_secureBaseUrl}{_posterPathImgSize}{mediaItem.PosterPath}"
        };
    }

    // public ShowDto MovieToShowDto(Movie movie) {
    //    // TODO: Implement
    // }

    // public ShowDto TvShowToShowDto(TvShow tvShow) {
    //     // TODO: Implement
    // }
    
}
