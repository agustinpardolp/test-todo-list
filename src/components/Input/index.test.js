import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
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

describe("Input", () => {
    const defaultProps = {
        placeholder: InputPlaceholder,
        handleChange: jest.fn(),
        disabled: false
    }
    test('should be defined', () => {
        expect(Input).toBeDefined();
    });
    test("should render correctly", async () => {
        render(<Input {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(screen.getByPlaceholderText(InputPlaceholder)).toBeInTheDocument();
        expect(inputComponent).not.toBeDisabled();
    });
    test("should change values correctly", async () => {
        render(<Input  {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        userEvent.type(inputComponent, inputValueTest);
        await waitFor(() => {
            expect(inputComponent).toHaveValue(inputValueTest)
            expect(inputComponent).not.toHaveValue('')
        })
    });
    test("should not show message error with a correct value type", async () => {
        render(<Input  {...defaultProps} errorMessage={errorMessageTest} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexOk)
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });

    test("should shows message error with a wrong value type", async () => {
        render(<Input  {...defaultProps} errorMessage={errorMessageTest} regex={onlyLettersRegex} error={true} />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
        expect(screen.getByText(errorMessageTest)).toBeInTheDocument();
    });
    test("should not show message error if field is empty", async () => {
        render(<Input  {...defaultProps} errorMessage={errorMessageTest} regex={onlyLettersRegex} />);
        userEvent.type(screen.getByRole('textbox'), '')
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });
    test("should works as default input if regex props does`t exist", async () => {
        render(<Input {...defaultProps}  />);
        userEvent.type(screen.getByRole('textbox'), inputValueRegexFail)
        expect(screen.queryByText(errorMessageTest)).not.toBeInTheDocument();
    });
    test("should not work if prop disabled is true ", async () => {
        render(<Input {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(inputComponent).toBeDisabled();
    });
    test("should be focus if prop disabled is false", async () => {
        render(<Input  {...defaultProps} regex={onlyLettersRegex} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).toHaveFocus();
    });
    test("should not to be focus if prop disabled is true", async () => {
        render(<Input {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).not.toHaveFocus();
    });
    it('should render text when label has value', () => {
        render(<Input {...defaultProps} label ={inputLabel}/>);
        expect(screen.getByText(inputLabel)).toBeInTheDocument();
    });

});
