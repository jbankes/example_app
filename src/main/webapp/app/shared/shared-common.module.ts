import { NgModule } from '@angular/core';

import { ExampleJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ExampleJhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ExampleJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ExampleJhipsterSharedCommonModule {}
