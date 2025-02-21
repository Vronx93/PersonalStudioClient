import { mockReview1 } from "../../test/mocks/mockData"
import {screen, render } from "../../test/test-utils"
import ReviewElement from "./ReviewElement"

describe("ReviewElement component", () => {
    test("should render 7 images (avatar + stars + google icon)", () => {
        render(<ReviewElement reviewData={mockReview1} />)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(7)
    })
})