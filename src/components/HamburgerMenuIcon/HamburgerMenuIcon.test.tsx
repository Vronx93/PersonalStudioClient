import { render, screen } from "../../test/test-utils";
import HamburgerMenuIcon from "./HamburgerMenuIcon";

describe("HamburgerMenuIcon component", () => {
  test("should render icon image", () => {
    render(<HamburgerMenuIcon onClick={vi.fn()} />);
    const image = screen.getByRole("img");
    expect(image).toBeVisible();
  });
});
