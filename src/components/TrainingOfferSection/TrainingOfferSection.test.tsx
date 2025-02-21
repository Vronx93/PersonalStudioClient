import { MemoryRouter } from "react-router-dom"
import {render, screen} from "../../test/test-utils"
import TrainingOfferSection from "./TrainingOfferSection"

describe("TrainingOfferSection component", () => {
    test("should render 3 headings, 2 buttons(links)", () => {
        render(<MemoryRouter><TrainingOfferSection /></MemoryRouter>)
        const headings = screen.getAllByRole("heading")
        const buttons = screen.getAllByRole("link")
        expect(headings).toHaveLength(3)
        expect(buttons).toHaveLength(2)
    })
})