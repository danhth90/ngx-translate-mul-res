import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'adult',
    loadChildren: () => import("./adult/adult.module").then(rec=>rec.AdultModule)
},{
  path: 'hentai',
  loadChildren: () => import("./hentai/hentai.module").then(rec=>rec.HentaiModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
