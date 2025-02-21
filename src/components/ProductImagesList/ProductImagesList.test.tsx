import { MemoryRouter } from "react-router-dom";
import { screen, render } from "../../test/test-utils";
import ProductImagesList from "./ProductImagesList";
import { mockImages } from "../../test/mocks/mockData";
vi.mock("../../api/api", () => ({
  getImage: vi.fn(() => {
    return new Promise<Blob>((resolve) => {
      resolve(new Blob([""], { type: "image/jpeg" }));
    });
  }),
}));
global.URL.createObjectURL = vi.fn(() => "mock.url");

describe("ProductImagesList component", () => {
  test("should render 2 images", async () => {
    render(
      <MemoryRouter>
        <ProductImagesList images={mockImages} />
      </MemoryRouter>
    );
    const images = await screen.findAllByRole("img");
    expect(images).toHaveLength(2);
  });
});
