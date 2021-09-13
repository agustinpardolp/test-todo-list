import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ErrorMessage from ".";

const errorMessageTest = 'Ocurrio un error test';

describe("ErrorMessage", () => {
    test('should be defined', () => {
        expect(ErrorMessage).toBeDefined();
    });
    test("should render correctly", async () => {
        render(<ErrorMessage errorMessage={errorMessageTest} />);
        expect(screen.queryByText(errorMessageTest)).toBeInTheDocument();
    });
   
});
