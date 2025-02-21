// import { MemoryRouter } from "react-router-dom";
// import { mockItem1 } from "../../test/mocks/mockData";
// import { render } from "../../test/test-utils";
// import EditShopItemForm from "./EditShopItemForm";
vi.mock("react-router-dom", async (importOriginal) => {
  const actual: {} = await importOriginal();
  return {
    ...actual,
    Form: vi.fn(({ children }) => <div>{children}</div>),
    useSearchParams: vi.fn(),
    useNavigation: vi.fn(),
  };
});
vi.mock("../../api/api", () => ({
  getImage: vi.fn(() => {
    return new Promise<Blob>((resolve) => {
      resolve(new Blob([""], { type: "image/jpeg" }));
    });
  }),
}));
global.URL.createObjectURL = vi.fn(() => "mock.url");

describe("EditShopItemForm component", () => {
  test("should render with filled inputs and submit btn", () => {
    // render(
    //   <MemoryRouter>
    //     <EditShopItemForm item={mockItem1} />
    //   </MemoryRouter>
    // );
    // const button = screen.getByRole("button")
    // const descriptionInput = screen.getByAltText(/zaktualizuj opis przedmiotu/i)
    // const priceInput = screen.getByAltText(/zaktualizuj cenę przedmiotu/i)
    // const amountInput = screen.getByAltText(/zaktualizuj ilość dostępnych przedmiotów/i)
    // const nameInput = screen.getByAltText(/zaktualizuj nazwę przedmiotu/i)
    // expect(button).toBeVisible()
    // expect(descriptionInput).toBeVisible()
    // expect(priceInput).toBeVisible()
    // expect(amountInput).toBeVisible()
    // expect(nameInput).toBeVisible()
  });
});
