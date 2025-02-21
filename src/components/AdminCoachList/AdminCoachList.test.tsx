import { MemoryRouter } from "react-router-dom";
import { screen, render } from "../../test/test-utils";
import AdminCoachList from "./AdminCoachList";

const coach = {
  id: "6859d5d3-bd4b-42d8-b00b-8dedc140db0b",
  name: "Test User",
  description: "Test",
  imageDetails: [
    {
      imageId: "f81bf65f-5b1b-462a-978a-35fca7f4d05f",
      isPrimary: false,
    },
    {
      imageId: "b165db76-5c27-4645-bec5-038c8d6dcb2a",
      isPrimary: false,
    },
    {
      imageId: "dc06b7bd-af55-4019-be1f-bee3955f3cb1",
      isPrimary: false,
    },
  ],
};

describe("AdminCoachList component with 2 items", () => {
  test("should render list and 2 list elements", () => {
    render(
      <MemoryRouter>
        <AdminCoachList coaches={[coach, coach]} />
      </MemoryRouter>
    );
    const list = screen.getByRole("list");
    const listElements = screen.getAllByRole("listitem");
    expect(list).toBeVisible();
    expect(listElements).toHaveLength(2);
  });
});
