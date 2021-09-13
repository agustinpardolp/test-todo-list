import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";
const buttonLabel = 'Agregar test';
const defaultProps = {
  label:buttonLabel,
  isDisabled: false
}
describe("Button", () => {

  test('should be defined', () => {
    expect(Button).toBeDefined();
  });
  test("Render component correctly", async () => {
    render(<Button {...defaultProps}/>);
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });
  
  it('Should be click', () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} handleClick={handleClick} />);
    const buttonComponent = screen.getByRole('button', buttonLabel )
    fireEvent.click(buttonComponent);
    expect(handleClick.mock.calls.length).toBe(1);
  });
  it('Should not click', () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} disabled={true} handleClick={handleClick}/>);
    const buttonComponent = screen.getByRole('button', buttonLabel )
    fireEvent.click(buttonComponent);
    expect(handleClick.mock.calls.length).toBe(0);
  });
});
