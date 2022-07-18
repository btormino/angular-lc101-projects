import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pictures';
  image1 = "https://i.imgur.com/WqMD23g.jpg";
  image2 = "https://i.imgur.com/nULJ1N9.jpg";
  image3 = "https://i.imgur.com/xtXDbn7.jpg";
  image4 = "https://i.imgur.com/puILpgi.jpg";
  constructor() { }

  ngOnInit() {
  }

}