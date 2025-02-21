import { render, screen } from "../../test/test-utils";
import ThumbnailUploadList from "./ThumbnailUploadList";
import { mockImageArrWithUUID } from "../../test/mocks/mockData";

describe("ThumbnailUploadList component with 2 thumbnails elements", () => {
  test("should render 2 list item and 2 images", () => {
    global.URL.createObjectURL = vi.fn();
    render(<ThumbnailUploadList imagesArr={mockImageArrWithUUID} />);
    const list = screen.getAllByRole("listitem");
    const img = screen.getAllByRole("img");
    expect(list).toHaveLength(2);
    expect(img).toHaveLength(2);
  });
});
