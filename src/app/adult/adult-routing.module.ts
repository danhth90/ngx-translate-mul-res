import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdultComponent } from './adult.component'

const routes: Routes = [{
  path: '',
  component: AdultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultRoutingModule { }
