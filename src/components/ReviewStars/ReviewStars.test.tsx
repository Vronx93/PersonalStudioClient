import { screen, render } from "../../test/test-utils"
import ReviewStars from "./ReviewStars"

describe("ReviewStars component", () => {
    test("should render correct amount of golden stars (5)", () => {
        render(<ReviewStars rate={5} />)
        const stars = screen.getAllByRole("img")
        expect(stars).toHaveLength(5)
    })
})