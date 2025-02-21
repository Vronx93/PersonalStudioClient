import { render, screen } from "../../test/test-utils";
import AdminMessageList from "./AdminMessageList";

const mockMessage = {
	id: "mock",
	coachId: "mock",
	firstName: "mock",
	lastName: "mock",
	phoneNumber: "mock",
	emailAddress: "mock",
	message: "mock",
	createdDate: "mock",
};

const mockCoach = {
	id: "mock",
	name: "string",
	description: "string",
	imageDetails: [{ imageId: "string", isPrimary: false }],
};

describe("AdminMessageList component with 2 items", () => {
	test("should render list and 2 list items", () => {
		render(
			<AdminMessageList
				messages={[mockMessage, mockMessage]}
				coaches={[mockCoach]}
			/>
		);
		const list = screen.getByRole("list");
		const listItems = screen.getAllByRole("listitem");
		expect(list).toBeVisible();
		expect(listItems).toHaveLength(2);
	});
});
