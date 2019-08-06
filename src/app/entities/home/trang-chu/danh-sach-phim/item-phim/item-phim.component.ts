import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/commom/models/Phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
@Input() item: Phim;
  constructor() { }

  ngOnInit() {
  }

}
