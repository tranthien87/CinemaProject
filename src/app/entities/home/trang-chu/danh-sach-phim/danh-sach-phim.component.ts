import { Component, OnInit, Input } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { Phim } from 'src/app/commom/models/Phim';
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss'],
  providers: [NgbTabsetConfig]
})
export class DanhSachPhimComponent implements OnInit {
 @Input() DSPhim: Phim[];

  constructor(config: NgbTabsetConfig) {
      // customize default values of tabsets used by this component tree
      config.justify = 'center';
      config.type = 'pills';
   }

  ngOnInit() {
  }

}
