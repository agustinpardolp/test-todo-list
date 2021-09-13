import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

import TaskManager from ".";
import { BASE_URL } from "../../services/config";
import { viewLabels } from "./constants";
import userEvent from "@testing-library/user-event";
import { todoLabels } from "./components/Todo/constants";

const inputValueTest = 'Nueva tarea agregada';
const InputPlaceholder = 'Agregar nueva tarea test';

describe("TaskManager", () => {
    const server = setupServer(
        rest.get(BASE_URL, (req, res, ctx) =>
            res(ctx.json(
                [{ id: 1, title: "Todo", todos: [{ id: 1, title: "Pasear perro", status: "DONE" }] }]))
        )
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test('should be defined', () => {
        expect(TaskManager).toBeDefined();
    });
    test("should render correctly", async () => {
        act(() => {
            render(<TaskManager />);
        });
        expect(await screen.findByText("Todo")).toBeInTheDocument();
        expect(await screen.findByText("Pasear perro")).toBeInTheDocument();
    });
    test("shoul add a new todolist correctly", async () => {
        act(() => {
            render(<TaskManager />);
        });
        const button = await screen.findByRole('button', viewLabels.buttonLabel)
        fireEvent.click(button);

        expect(await screen.findByText("Todo 1")).toBeInTheDocument();
    });
    test("shoul add a new todo correctly", async () => {
        act(() => {
            render(<TaskManager />);
        });
        const button = await screen.findByRole('button', viewLabels.buttonLabel)
        fireEvent.click(button);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        userEvent.type(inputComponent, inputValueTest);
        fireEvent.submit(inputComponent);
        await waitFor(() => {
           const checkboxComponent = screen.getByRole('checkbox')
           expect(checkboxComponent).not.toBeDisabled();
        })
      
    })
    test("should appear 'archivar' button when the task is completed ", async () => {
        act(() => {
            render(<TaskManager />);
        });
        const button = await screen.findByRole('button', viewLabels.buttonLabel)
        fireEvent.click(button);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        userEvent.type(inputComponent, inputValueTest);
        fireEvent.submit(inputComponent);
        const checkboxComponent = await screen.findByRole('checkbox')
        fireEvent.click(checkboxComponent);
        expect(await screen.findByText(todoLabels.buttonLabel)).toBeInTheDocument();

    });

});
