import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HentaiRoutingModule } from './hentai-routing.module';
import { HentaiComponent } from './hentai.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { NzTabsModule } from 'ng-zorro-antd/tabs'


@NgModule({
  declarations: [HentaiComponent],
  imports: [
    CommonModule,
    HentaiRoutingModule,
    TranslateModule,
    NzTabsModule
  ]
})
export class HentaiModule {
  
 }
