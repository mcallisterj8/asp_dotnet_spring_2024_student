import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrl: './trending-list.component.css',
})
export class TrendingListComponent implements OnInit {
  
  public title: string = '';
  public currentFilter: 'allTrending' | 'trendingMovies' | 'trendingTvShows' =
    'allTrending';

    ngOnInit(): void {
      
    }

    public getAllTrending(): void {

    }

    public getTrendingMovies(): void {

    }

    public getTrendingTvShows(): void {
      
    }
}
