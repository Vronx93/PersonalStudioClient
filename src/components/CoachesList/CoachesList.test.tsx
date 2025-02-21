import { render, screen } from "../../test/test-utils";
import CoachesList from "./CoachesList";

describe("CoachesList component", () => {
	test("should render list", () => {
		render(<CoachesList listData={[]} />);
		const list = screen.getByRole("list");
		expect(list).toBeVisible();
	});
});
