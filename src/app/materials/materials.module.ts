import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const material: any = [
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialsModule { }
