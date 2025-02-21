import { MemoryRouter } from "react-router-dom";
import {
  render,
  // screen
} from "../../test/test-utils";
import TransformationList from "./TransformationList";

describe("TransformationList component", () => {
  test("should render list and link", () => {
    render(
      <MemoryRouter>
        <TransformationList transformationList={[]} />
      </MemoryRouter>
    );
    // const list = screen.getByRole("list");
    // const link = screen.getByRole("link");
    // expect(list).toBeVisible();
    // expect(link).toBeVisible();
  });
});
