import { Component, OnInit } from '@angular/core';
import { Phim } from './../../../commom/models/Phim';
import { DataService } from './../../../shared/services/data.service';
@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  DanhSachPhim: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListMovie();

  }
  getListMovie() {
    const uri = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP09';
    this.dataService.get(uri).subscribe(
      (data: Phim) => {
        this.DanhSachPhim = data;
        console.log(this.DanhSachPhim);
      }
    );
  }

}
