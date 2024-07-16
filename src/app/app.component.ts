import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DeuxComponent } from './deux/deux.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, RouterLink,DeuxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
