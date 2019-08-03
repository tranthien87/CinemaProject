import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/commom/material/material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalTrailerComponent } from './carousel/modal-trailer/modal-trailer.component';





@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, ModalTrailerComponent ],
  imports: [
    CommonModule, TrangChuRoutingModule, NgbModule, MaterialModule, CarouselModule ]
})
export class TrangChuModule { }