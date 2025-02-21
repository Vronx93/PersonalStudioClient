import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../../test/test-utils";
import BenefitList from "./BenefitList";
import benefits from "../../benefits.json";

describe("BenefitList component", () => {
  test("should render 5 headings, 2 coach images, link(visible as btn)", () => {
    render(
      <MemoryRouter>
        <BenefitList benefits={benefits} />
      </MemoryRouter>
    );
    const headings = screen.getAllByRole("heading");
    const link = screen.getByRole("link");
    expect(headings).toHaveLength(5);
    expect(link).toBeVisible();
  });
});
