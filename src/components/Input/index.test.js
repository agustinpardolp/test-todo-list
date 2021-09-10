import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import Input from ".";
import { onlyLettersRegex } from "../../views/TaskManager/components/TodoList/constants";
const InputPlaceholder = 'Agregar nueva tarea test';
const inputLabel = 'Label input test'
const inputValueTest = 'tarea test a agregar';
const inputValueRegexOk = 'Its only letters';
const inputValueRegexFail = '%&%$%$%';
const errorMessageTest = 'Ocurrio un error test';
//focus si esta disabled!!!
describe("Input", () => {
    test("Render correctly", async () => {
        render(<Input placeholder={InputPlaceholder} label={inputLabel} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(screen.getByPlaceholderText(InputPlaceholder)).toBeInTheDocument();
        expect(inputComponent).not.toBeDisabled();
        expect(screen.getByText(inputLabel)).toBeInTheDocument();
    });
    test("Change values correctly", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} handleChange={handleChange} value={inputValueTest} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        await waitFor(() => {
           fireEvent.change(inputComponent, inputValueTest);
            expect(inputComponent).toHaveValue(inputValueTest)
            expect(inputComponent).not.toHaveValue('')
        })
    });
    test("Doesn`t show message error with a correct value type", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexOk)
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });

    test("Shows message error with a wrong value type", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
        expect(screen.getByText(errorMessageTest)).toBeInTheDocument();
    });
    test("Doesn`t show message error if field is empty", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} errorMessage={errorMessageTest} handleChange={handleChange} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), '')
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });
    test("Works as default if regex props doesnt exist", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} handleChange={handleChange} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });
    test("Doesnt work if prop disabled is true ", async () => {
        const handleChange = jest.fn();
        render(<Input placeholder={InputPlaceholder} handleChange={handleChange} regex={onlyLettersRegex} disabled={true} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(inputComponent).toBeDisabled();
    });
});
