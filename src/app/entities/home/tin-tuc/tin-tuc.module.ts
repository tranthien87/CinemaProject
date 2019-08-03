import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinTucComponent } from './tin-tuc.component';
import { TinTucRoutingModule } from './tin-tuc-routing.module';

@NgModule({
  declarations: [TinTucComponent],
  imports: [
    CommonModule, TinTucRoutingModule
  ]
})
export class TinTucModule { }
