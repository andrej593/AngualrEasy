import { Component, inject } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);

  onSubmit() {
    this.router.navigateByUrl("/login");
  }
}
