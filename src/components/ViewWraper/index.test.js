import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import ViewWrapper from ".";

const defaultProps = {
    children:<div>TEST CHILDREN</div>,
    title : 'Title todo list - test',
}

describe("ViewWrapper", () => {
    test('should be defined', () => {
        expect(ViewWrapper).toBeDefined();
      });
      test("should render title correctly", async () => {
        render(<ViewWrapper {...defaultProps} />);
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    });
    test("should render children correctly", async () => {
        render(<ViewWrapper {...defaultProps} />);
        expect(screen.getByText('TEST CHILDREN')).toBeInTheDocument();
    });
});
