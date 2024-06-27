import { Component } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
