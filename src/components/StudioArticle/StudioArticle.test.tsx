import { render, screen } from "../../test/test-utils";
import StudioArticle from "./StudioArticle";

describe("StudioArticle component", () => {
  test("should render article", () => {
    render(<StudioArticle newLineTextList={["Test"]} />);
    const article = screen.getByRole("article");
    expect(article).toBeVisible();
  });
});
