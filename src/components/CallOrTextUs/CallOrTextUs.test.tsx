import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../../test/test-utils";
import CallOrTextUs from "./CallOrTextUs";

describe("CallOrTextUs component", () => {
  test("should render 2 headings", () => {
    render(
      <MemoryRouter>
        <CallOrTextUs />
      </MemoryRouter>
    );
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);
  });
});
