import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader, TranslatePipe, TranslateService } from "@ngx-translate/core";

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CommonModule } from "@angular/common"
import { AppRoutingModule } from "./app-routing.module"

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `./i18n/`, ".json");
}
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons },
    TranslateService
   ]
})
export class AppModule {
  constructor(private translate: TranslateService){
    translate.addLangs(["en", "vi"])
    translate.setDefaultLang('vi')

    let browserLang = translate.getBrowserLang()
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi')

  }
}
