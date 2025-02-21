import { render, screen } from "../../test/test-utils";
import TextMe from "./TextMe";

describe("TextMe component", () => {
  test("should render title and 3 links", () => {
    render(<TextMe />);
    const title = screen.getByRole("heading");
    expect(title).toBeVisible();
  });
});
