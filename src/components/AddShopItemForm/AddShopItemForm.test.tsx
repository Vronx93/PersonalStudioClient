import { render, screen } from "../../test/test-utils";
import AddShopItemForm from "./AddShopItemForm";
vi.mock("react-router-dom", () => ({
	Form: vi.fn(({ children }) => {
		return children;
	}),
	useNavigation: vi.fn(() => {
		return "mock";
	}),
}));

describe("AddShopItem component", () => {
	test("should render title, description, price, amount, image? inputs and submit button", async () => {
		render(<AddShopItemForm />);
		const titleInput = await screen.findByPlaceholderText(
			"Tytuł/Nazwa przedmiotu"
		);
		const descriptionInput = await screen.findByPlaceholderText(
			"Opis przedmiotu"
		);
		const priceInput = await screen.findByPlaceholderText("Cena za sztukę");
		const amountInput = await screen.findByPlaceholderText(
			"Ilość dostępnych przedmiotów"
		);
		const submitBtn = await screen.findByRole("button", {
			name: "Wystaw na sprzedaż",
		});
		expect(titleInput).toBeVisible();
		expect(descriptionInput).toBeVisible();
		expect(priceInput).toBeVisible();
		expect(amountInput).toBeVisible();
		expect(submitBtn).toBeVisible();
	});
});
