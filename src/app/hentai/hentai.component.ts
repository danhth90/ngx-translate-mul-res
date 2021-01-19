import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { BaseModule } from '../base.module'

@Component({
  selector: 'app-hentai',
  templateUrl: './hentai.component.html',
  styleUrls: ['./hentai.component.css']
})
export class HentaiComponent extends BaseModule implements OnInit {

  constructor(translate: TranslateService) {
    super(translate, 'hentai')
  }

  ngOnInit(): void {
  }

}
