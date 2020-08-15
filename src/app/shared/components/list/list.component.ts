import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-commom-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-list">
      <ng-container>
        <ng-content></ng-content>
      </ng-container>
    </div>
  `,

  styles: [
    `
      .app-list {
        width: 100%;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
      }
    `,
  ],
})
export class CommonListComponent {
  constructor() {}
}
