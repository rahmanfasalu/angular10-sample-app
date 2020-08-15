import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [className]="active ? 'active' : 'inactive'"
      type="button"
      [disabled]="disabled"
      (click)="doAction(item ? item : $event)"
    >
      <ng-container>
        <ng-content></ng-content>
      </ng-container>
    </button>
  `,

  styles: [
    `
      button {
        border: none;
        margin: 1px;
        background: #343a40;
        color: #fff;
        font-size: 14px;
        border-radius: 3px;
        padding: 5px 15px;
      }
      button:hover {
        transition: all 0.3s ease;
      }
      button:focus {
        border: none;
        outline: none;
      }
      button.active {
        background: #eb9000;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() item?: any;
  @Input() disabled?: boolean;
  @Input() active?: boolean;

  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public doAction(event) {
    this.action.emit(event);
  }
}
