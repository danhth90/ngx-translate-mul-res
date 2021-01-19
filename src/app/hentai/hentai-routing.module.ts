import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HentaiComponent } from './hentai.component'

const routes: Routes = [{
  path: '',
  component: HentaiComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HentaiRoutingModule { }
