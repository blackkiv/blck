import { Component, OnInit } from '@angular/core';
import { GifService } from './services/gif.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[style.background-image]': 'gif',
  },
})
export class AppComponent implements OnInit {
  title = 'blck';

  gif: string = '';

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.bodyBackgroundImage();
  }

  bodyBackgroundImage() {
    this.gifService.gif$.subscribe(
      (result) =>
        (this.gif = result
          ? 'url("https://media.giphy.com/media/KZFrf9JusXzmpnPsT6/giphy.gif")'
          : '')
    );
  }
}
