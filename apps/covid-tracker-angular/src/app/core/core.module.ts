import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports:[NavbarComponent]
})
export class CoreModule { constructor(@Optional() @SkipSelf() core: CoreModule) {
  if (core) {
    throw new Error('CoreModule can only be imported once.');
  }
}}

