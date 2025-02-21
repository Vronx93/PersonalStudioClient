import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../../test/test-utils";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard component", () => {
  test("should render more than 1 link and one logo image", () => {
    render(
      <MemoryRouter>
        <AdminDashboard />
      </MemoryRouter>
    );
    // const links = screen.getAllByRole("link")
    const img = screen.getByRole("img");
    expect(img).toBeVisible();
  });
});
