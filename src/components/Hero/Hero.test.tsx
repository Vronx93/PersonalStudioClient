import { MemoryRouter } from "react-router-dom";
import { screen, render } from "../../test/test-utils";
import Hero from "./Hero";

describe("Hero component", () => {
  test("should render hero image, 2 waves images, one button image, heading and button as link", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const img = screen.getAllByRole("img");
    const heading = screen.getByRole("heading");
    const btn = screen.getByRole("link");
    expect(img).toHaveLength(4);
    expect(heading).toBeVisible();
    expect(btn).toBeVisible();
  });
});
