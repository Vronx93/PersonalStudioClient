import { render, screen } from "../../test/test-utils";
import AdminHeader from "./AdminHeader";

describe("AdminHeader component", () => {
  test("should render title", () => {
    render(<AdminHeader title={"mockTitle"} />);
    const title = screen.getByRole("heading");
    expect(title).toBeVisible();
  });
});
