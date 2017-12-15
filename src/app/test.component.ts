import {Component} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styles: [`.example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }
  
  .example-full-width {
    width: 100%;
  }
  `],
  template: `<button mat-button>Click me!</button>`,
})
export class TestComponent {}