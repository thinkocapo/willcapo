import { NgModule } from '@angular/core';

import { WillcapoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WillcapoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WillcapoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WillcapoSharedCommonModule {}
