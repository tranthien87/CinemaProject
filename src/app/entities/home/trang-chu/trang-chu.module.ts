import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/commom/material/material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';






@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, DanhSachPhimComponent, ItemPhimComponent ],
  imports: [
    CommonModule, TrangChuRoutingModule, NgbModule, MaterialModule, NgxPaginationModule ]
})
export class TrangChuModule { }
