import { Component } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

}
