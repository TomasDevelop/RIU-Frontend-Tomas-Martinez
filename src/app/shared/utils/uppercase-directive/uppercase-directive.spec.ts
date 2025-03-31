// The Angular Imports
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
// Testing Library
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
// Directive
import { UppercaseDirective } from './uppercase.directive';

@Component({
  standalone: true,
  imports: [UppercaseDirective, ReactiveFormsModule],
  template: `
    <input
      [formControl]="control"
      appUppercase
      data-testid="test-input"
    >
  `
})

class HostComponent {
  control = new FormControl('', { updateOn: 'change' });
}

describe('UppercaseDirective', () => {
  it('should convert text at uppercase', async () => {
    const { fixture } = await render(HostComponent);
    const input = screen.getByTestId('test-input') as HTMLInputElement;

    await userEvent.type(input, 'test123');
    expect(input.value).toBe('TEST123');

    expect(fixture.componentInstance.control.value).toBe('TEST123');
  });
});
