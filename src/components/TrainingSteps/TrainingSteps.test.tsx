import { MemoryRouter } from "react-router-dom"
import {screen, render} from "../../test/test-utils"
import TrainingSteps from "./TrainingSteps"

describe("TrainingSteps component", () => {
    test("should render 5 headings, 5 images and link")
    render(<MemoryRouter><TrainingSteps /></MemoryRouter>)
    const headings = screen.getAllByRole("heading")
    const images = screen.getAllByRole("img")
    const link = screen.getByRole("link")
    expect(headings).toHaveLength(5)
    expect(images).toHaveLength(5)
    expect(link).toBeVisible()
})