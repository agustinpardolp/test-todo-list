import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import Checkbox from ".";
import { onlyLettersRegex } from "../../views/TaskManager/components/TodoList/constants";
const checkboxPlaceholder = 'Agregar nueva tarea test';
const checkboxLabel = 'Todo check 1'
const checkboxValueTest = 'tarea test a agregar';
const inputValueRegexOk = 'Its only letters';
const inputValueRegexFail = '%&%$%$%';
const errorMessageTest = 'Ocurrio un error test';

describe("Checkbox", () => {
    test("Render correctly", async () => {
        render(<Checkbox label={checkboxLabel} />);
        const checkboxComponent = screen.getByRole('checkbox')
        expect(checkboxComponent).not.toBeDisabled();
    });
    test("Change values correctly", async () => {
        const onChange = jest.fn();
        render(<Checkbox onChange={onChange} isChecked={false} />);
        const checkboxComponent = screen.getByRole('checkbox')
            userEvent.type(screen.findByRole('checkbox'))
            expect(checkboxComponent).toBeChecked()
    });
    // test("Doesn`t show message error with a correct value type", async () => {
    //     const handleChange = jest.fn();
    //     render(<Checkbox placeholder={checkboxPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
    //     userEvent.type(screen.getByRole('textbox'), inputValueRegexOk)
    //     expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    // });

    // test("Shows message error with a wrong value type", async () => {
    //     const handleChange = jest.fn();
    //     render(<Checkbox placeholder={checkboxPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
    //     userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
    //     expect(screen.getByText(errorMessageTest)).toBeInTheDocument();
    // });
    // test("Doesn`t show message error if field is empty", async () => {
    //     const handleChange = jest.fn();
    //     render(<Checkbox placeholder={checkboxPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
    //     userEvent.type(screen.getByRole('textbox'), '')
    //     expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    // });
    // test("Works as default if regex props doesnt exist", async () => {
    //     const handleChange = jest.fn();
    //     render(<Checkbox placeholder={checkboxPlaceholder} handleChange={handleChange} regex={onlyLettersRegex} />);
    //     userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
    //     expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    // });
    // test("Doesnt work if prop disabled is true ", async () => {
    //     const handleChange = jest.fn();
    //     render(<Checkbox placeholder={InputPlaceholder} handleChange={handleChange} regex={onlyLettersRegex} disabled={true} />);
    //     const inputComponent = screen.getByRole('textbox', InputPlaceholder)
    //     expect(inputComponent).toBeDisabled();
    // });
});
