import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('release-versioning');

  onePlusOne(): number {
    return 1 + 1;
  }

  twoPlusTwo(): number {
    return 2 + 2;
  }

  threePlusThree(): number {
    return 3 + 3;
  }
}
