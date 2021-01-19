import { OnDestroy } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"
import { Subject } from "rxjs"
import { takeUntil } from 'rxjs/operators'

export class BaseModule implements OnDestroy{
    public destroy$ = new Subject<void>();
    /**
     * 
     * @param trans Translate services
     * @param moduleName thư mục resource cần lấy
     */
    constructor(private trans: TranslateService, moduleName?: string){
        this.trans.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(rec=>{
            this.setResourceTranslate(moduleName, trans.currentLang)
        });
        this.setResourceTranslate(moduleName, trans.currentLang)
    }

    ngOnDestroy(){
        this.destroy$.next();
        this.destroy$.complete();
    }

    setResourceTranslate(moduleName, lang){
        let i18n = require(`src/i18n/${moduleName}/${lang}.json`)
        this.trans.setTranslation(lang, i18n, true)
    }
}