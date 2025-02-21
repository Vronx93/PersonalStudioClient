import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../../test/test-utils";
import ContactInfo from "./ContactInfo";

describe("ContactInfo component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ContactInfo />
      </MemoryRouter>
    );
  });
  test("should render 6 images (map and contact icons)", () => {
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(6);
  });
  test("should render heading and link(button)", () => {
    const heading = screen.getAllByRole("heading");
    expect(heading).toHaveLength(2);
  });
});
