import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  time = new Date();
  clock: any;

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.clock = setInterval(() => (this.time = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.clock);
  }

  changeGif() {
    this.gifService.change();
  }
}
