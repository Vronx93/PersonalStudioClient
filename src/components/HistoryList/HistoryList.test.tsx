import { render, screen } from "../../test/test-utils";
import StudioHistoryList from "./HistoryList";
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

describe("StudioHistoryList component", () => {
  test("should render list", () => {
    render(
      <StudioHistoryList
        title={"Test"}
        fancyTitleRight={""}
        historyList={[
          {
            title: "test",
            descriptionList: ["test", "test"],
            imagesList: ["test", "test"],
            altForImages: "test",
          },
        ]}
      />
    );
    const list = screen.getByRole("list");
    expect(list).toBeVisible();
  });
});
