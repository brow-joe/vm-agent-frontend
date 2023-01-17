import { NgModule } from '@angular/core';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { MaterialModule } from '../material.module';

import { LoaderComponent } from './loader/loader.component';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  imports: [
    DropzoneModule,
    MaterialModule
  ],
  declarations: [
    LoaderComponent,
    UploaderComponent
  ],
  exports: [
    LoaderComponent,
    UploaderComponent
  ]
})
export class ComponentsModule { }
