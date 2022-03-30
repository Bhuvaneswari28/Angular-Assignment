import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloningComponent } from './cloning.component';
import { CloneheaderComponent } from './cloneheader/cloneheader.component';
import { ClonebodyComponent } from './clonebody/clonebody.component';



@NgModule({
  declarations: [
    CloningComponent,
    CloneheaderComponent,
    ClonebodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CloningComponent
  ]
})
export class CloningModule { }
