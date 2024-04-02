import { Component, OnInit, inject } from '@angular/core';
import { TrendingService } from '../../services/trending.service';
import { Observable} from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrl: './trending-list.component.css',
})
export class TrendingListComponent implements OnInit {
  private _trendingService = inject(TrendingService);
  public title: string = '';
  public trendingList$: Observable<Show[] | []> = this._trendingService.trendingList$;
  

  public currentFilter: 'allTrending' | 'trendingMovies' | 'trendingTvShows' =
    'allTrending';

    ngOnInit(): void {
      this.getAllTrending();

    }

    public getAllTrending(): void {
      this.title = "Trending Movies and TV Shows";
      this.currentFilter = 'allTrending';
      this._trendingService.getAllTrending();
      
    }

    public getTrendingMovies(): void {
      this.currentFilter = 'trendingMovies';
    }

    public getTrendingTvShows(): void {
      this.currentFilter = 'trendingTvShows';
    }
}
