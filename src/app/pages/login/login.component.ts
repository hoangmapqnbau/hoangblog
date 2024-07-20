import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title = 'Nguyen Huy Hoang | Blog';
}
