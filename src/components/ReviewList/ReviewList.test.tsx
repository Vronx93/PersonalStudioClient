import { MemoryRouter } from "react-router-dom";
import { mockReviewList } from "../../test/mocks/mockData";
import { screen, render } from "../../test/test-utils";
import ReviewList from "./ReviewList";

describe("ReviewList component", () => {
  test("should render heading", () => {
    render(
      <MemoryRouter>
        <ReviewList reviews={mockReviewList} />
      </MemoryRouter>
    );
    const header = screen.getByRole("heading");
    expect(header).toBeVisible();
  });
});
