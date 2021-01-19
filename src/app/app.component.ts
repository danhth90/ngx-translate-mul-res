import { Component, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  styles: [
    `.layout {
      min-height: 100vh;
    }

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }

    nz-header {
      background: #fff;
      padding: 0;
      position: relative;
      
    }
    button{
        position: absolute;
        right: 16px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    nz-content {
      margin: 24px 16px 0;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      min-height: 360px;
    }

    nz-footer {
      text-align: center;
    }`
  ]
})
export class AppComponent  {
  isCollapsed = false;
  currLangStr: string = "Tiếng Việt";
constructor(private trans: TranslateService){

}
chagneLanguage(){
  let lang = "vi";
    if(this.trans.currentLang == "vi"){
      lang = "en";
      this.currLangStr = "English";
    }
    else{
      lang = "vi";
      this.currLangStr = "Tiếng việt";
    }
    
    this.trans.use(lang)
    this.trans.currentLang = lang

  }
}
