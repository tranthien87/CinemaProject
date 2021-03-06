import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';


const routes: Routes = [
  // trang Home
{ path: '', component: HomeComponent, children: [
  // Trang Chủ
  {path: '', loadChildren: './trang-chu/trang-chu.module#TrangChuModule'},
  // Trang tin tức
  { path: 'tin-tuc', loadChildren: './tin-tuc/tin-tuc.module#TinTucModule'},
  // Trang lịch chiếu
  // Chi tiết phim
  {path: 'chi-tiet-phim', loadChildren: './chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule'}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
