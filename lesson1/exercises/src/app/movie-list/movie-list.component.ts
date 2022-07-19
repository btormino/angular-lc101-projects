import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Atonement', 'Across the Universe', 'Full Metal Jacket', 'The Boys From Brazil'];

   constructor() { }

   ngOnInit() {
   }

}
