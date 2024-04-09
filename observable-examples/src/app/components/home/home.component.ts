import { Component, OnInit, inject } from '@angular/core';
import { Observable, from, tap } from 'rxjs';
import { ExampleService } from '../../services/example.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _exampleService = inject(ExampleService);
  public observable$: Observable<number> = this._exampleService.observable$;

  public resultArr: number[] = [] as number[];

  ngOnInit(): void {
    this._exampleService.getValues().subscribe((res) => {
      console.log('home component result from getValues():', res);
      this.resultArr.push(res);
    });
  }
}
