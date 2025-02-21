import { render, screen } from "../../test/test-utils";
import CreateSizeInput from "./CreateSizeInput";

describe("CreateSizeInput component", () => {
  test("should render two input fields", () => {
    render(<CreateSizeInput deleteFunction={vi.fn()} id={"1"} />);
    const sizeInput = screen.getByLabelText(/rozmiar/i);
    const amountInput = screen.getByLabelText(/ilość/i);
    expect(sizeInput).toHaveTextContent("");
    expect(amountInput).toHaveTextContent("");
  });
});
