import { render, screen } from "../../test/test-utils";
import AboutMeText from "./AboutMeText";

describe("AboutMeText component", () => {
  test("should render title and text content", () => {
    render(<AboutMeText text={"mock text"} />);
    const name = screen.getByRole("heading");
    const text = screen.getByTestId("text");
    expect(name).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
