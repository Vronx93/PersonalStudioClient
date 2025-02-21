import { render, screen } from "../../test/test-utils";
import StudioHistoryListElement from "./HistoryListElement";
import {
  setupIntersectionMocking,
  resetIntersectionMocking,
} from "react-intersection-observer/test-utils";

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  resetIntersectionMocking();
});

describe("StudioHistoryListElement component", () => {
  test("should render title", () => {
    render(
      <StudioHistoryListElement
        element={{
          title: "2010",
          descriptionList: ["test", "test"],
          imagesList: ["test", "test"],
          altForImages: "test",
        }}
        index={1}
      />
    );
    const title = screen.getByRole("heading");
    expect(title).toBeVisible();
  });
});
