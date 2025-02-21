import { render, screen } from "../../test/test-utils";
import NavArticle from "./NavArticle";

describe("NavArticle component", () => {
  test("should render article", () => {
    render(
      <NavArticle
        fancyTitleLeft="mockLeft"
        fancyTitleRight="mockRight"
        title="mockTitle"
        text={<p>mockText</p>}
      />
    );
    const article = screen.getByRole("article");
    expect(article).toBeVisible();
  });
});
