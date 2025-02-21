import { render, screen } from "../../test/test-utils";
import CoachesHero from "./CoachesHero";

describe("CoachesHero component", () => {
  test("should render hero img, title, button", () => {
    render(<CoachesHero />);
    const heroImg = screen.getByAltText(/wspólne zdjęcie trenerów./i);
    const title = screen.getByRole("heading");
    const button = screen.getByRole("button");
    expect(heroImg).toBeVisible();
    expect(title).toBeVisible();
    expect(button).toBeVisible();
  });
});
