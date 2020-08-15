import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav class="navbar navbar-expand-md  fixed-top bg-dark">
        <span class="text-light"> Recipe App</span>
      </nav>
    </header>
  `,
  styles: ['header { height: 60px; }'],
})
export class HeaderComponent {}
