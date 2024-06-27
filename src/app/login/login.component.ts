import { Component, inject } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authSerice = inject(AuthService);
  router = inject(Router);

  login() {
    this.authSerice.login();
    this.router.navigateByUrl("/home");
  }
}
