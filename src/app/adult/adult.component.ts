import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { BaseModule } from '../base.module'

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class AdultComponent extends BaseModule  implements OnInit {

  constructor(translate: TranslateService) {
    super(translate, 'adult');
  }

  ngOnInit(): void {
  }

}
