import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [EntitiesComponent, PageNotFoundComponent],
  imports: [
    CommonModule, EntitiesRoutingModule
  ]
})
export class EntitiesModule { }
