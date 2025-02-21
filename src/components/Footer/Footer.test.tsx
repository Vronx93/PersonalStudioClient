import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../../test/test-utils";
import Footer from "./Footer";

describe("Footer component", () => {
  test("should render footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
