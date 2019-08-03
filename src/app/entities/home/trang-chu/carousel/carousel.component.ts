import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/commom/models/Phim';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor() { }
@Input() phim: Phim[];
// Carrousel Options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      400: {
        items: 1,
        nav: false
      },
      740: {
        items: 1,
        nav: true
      },
      940: {
        items: 1,
        nav: true
      }
    },

  };
  ngOnInit() {
  }

}
