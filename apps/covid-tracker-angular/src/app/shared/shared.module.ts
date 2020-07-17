import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatCardModule];
const BASE_MODULES = [CommonModule];

@NgModule({
  declarations: [],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [...BASE_MODULES, ...MATERIAL_MODULES]
})
export class SharedModule {
}
