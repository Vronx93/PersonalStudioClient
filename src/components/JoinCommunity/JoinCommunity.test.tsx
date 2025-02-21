import { MemoryRouter } from "react-router-dom";
import { screen, render } from "../../test/test-utils";
import JoinCommunity from "./JoinCommunity";

describe("JoinCommunity component", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<JoinCommunity />
			</MemoryRouter>
		);
	});
	test("should render heading and paragraph", () => {
		const heading = screen.getByRole("heading");
		const paragraph = screen.getByText(/znajdź nas/i);
		expect(heading).toBeVisible();
		expect(paragraph).toBeVisible();
	});
	test("should render 3 images and 3 links", () => {
		const images = screen.getAllByRole("img");
		const links = screen.getAllByRole("link");
		expect(images).toHaveLength(3);
		expect(links).toHaveLength(3);
	});
});
