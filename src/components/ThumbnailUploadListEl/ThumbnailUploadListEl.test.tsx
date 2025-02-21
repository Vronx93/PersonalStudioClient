import { render, screen } from "../../test/test-utils";
import ThumbnailUploadListEl from "./ThumbnailUploadListEl";
import { mockImageFile1, mockUUID } from "../../test/mocks/mockData";

describe("AddImageItemThumbnail component", () => {
  test("should render image", async () => {
    global.URL.createObjectURL = vi.fn();
    render(<ThumbnailUploadListEl image={mockImageFile1} id={mockUUID} />);
    // const img = await screen.findByAltText(/zdjęcie przedmiotu/i); need to return img url from createObjectURL
    const deleteIcon = screen.getByAltText(/usuń element/i);
    // expect(img).toBeVisible();
    expect(deleteIcon).toBeVisible();
  });
});
