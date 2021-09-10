import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";
const buttonLabel = 'Agregar test';

describe("Button", () => {
  test("Render component correctly", async () => {
    render(<Button label={buttonLabel}/>);
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });
  
  it('Button should be click', () => {
    const handleClick = jest.fn();
    render(<Button label={buttonLabel} handleClick={handleClick}/>);
    const buttonComponent = screen.getByRole('button', buttonLabel )
    fireEvent.click(buttonComponent);
    expect(handleClick.mock.calls.length).toBe(1);
  });
  it('Button should not click', () => {
    const handleClick = jest.fn();
    render(<Button label={buttonLabel} handleClick={handleClick} disabled={true}/>);
    const buttonComponent = screen.getByRole('button', buttonLabel )
    fireEvent.click(buttonComponent);
    expect(handleClick.mock.calls.length).toBe(0);
  });
});
