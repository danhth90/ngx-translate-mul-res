import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultRoutingModule } from './adult-routing.module';
import { AdultComponent } from '../adult/adult.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BaseModule } from '../base.module'


@NgModule({
  declarations: [AdultComponent],
  imports: [
    CommonModule,
    AdultRoutingModule,
    TranslateModule,
    NzTabsModule
  ]
})
export class AdultModule { 
  


}
