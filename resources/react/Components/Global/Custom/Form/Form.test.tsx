// Dependencies
import { screen, render } from '@testing-library/react';
import { it } from 'node:test';


// Components
import Form, { FloatInput, FormErrors, FormGroup } from './index';

test('Custom Form', function () {

  it.skip('Render Float Input', function () {
    render(
      <FloatInput
        id="username"
        data-testid="float-input-username"
        label="Username"
        name="username"
        required={true}
      />,
    );

    const inputElement = screen.getByTestId('float-input-username');
    expect(inputElement).toBeInTheDocument();
  });

  it('Render FormErrors & Check if it contain errors object', function () {
    render(
      <FormErrors
        errors={{ username: 'This field is required.' }}
        data-testid="form-errors"
      />,
    );

    const errorElement = screen.getByTestId('form-errors');
    expect(errorElement).toHaveAttribute('errors');
  });

  it('Render FormGroup', function () {
    render(<FormGroup data-testid="form-group" />);

    const groupElement = screen.getByTestId('form-group');
    expect(groupElement).toBeInTheDocument();
  });

  // Test Form Element
  it('Render Form ', function () {
    render(
      <Form
        data-testid="custom-form"
        onSubmit={(e) => e.preventDefault()}
      ></Form>,
    );

    const formElement = screen.getByTestId('custom-form');
    expect(formElement).toBeInTheDocument();
  });
});
