import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import Checkbox from ".";
const checkboxLabel = 'Todo check 1'

const defaultProps = {
    label:checkboxLabel,
    onChange : jest.fn(),
    isDisabled: false
}

describe("Checkbox", () => {
    test('should be defined', () => {
        expect(Checkbox).toBeDefined();
      });
    test("sould render correctly", async () => {
        render(<Checkbox {...defaultProps} />);
        const checkboxComponent = screen.getByRole('checkbox')
        expect(checkboxComponent).not.toBeDisabled();
    });
    test("should change values correctly", async () => {
        render(<Checkbox {...defaultProps} />);
        const checkboxComponent = screen.getByRole('checkbox')
        expect(checkboxComponent.checked).toEqual(false)
        fireEvent.click(checkboxComponent)
        expect(checkboxComponent.checked).toEqual(true)
    });
    test("should be disabled if disabled property is true", async () => {
        render(<Checkbox {...defaultProps} isDisabled={true} />);
        const checkboxComponent = screen.getByRole('checkbox')
        expect(checkboxComponent).toBeDisabled();
    });
    test("should not be disabled if disabled property is true", async () => {
        render(<Checkbox {...defaultProps} />);
        const checkboxComponent = screen.getByRole('checkbox')
        expect(checkboxComponent).not.toBeDisabled();
    });
    
});
