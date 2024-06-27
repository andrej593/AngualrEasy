import { Component } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialsModule, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
