import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WillcapoCardModule } from './card/card.module';
import { WillcapoTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        WillcapoCardModule,
        WillcapoTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WillcapoEntityModule {}
