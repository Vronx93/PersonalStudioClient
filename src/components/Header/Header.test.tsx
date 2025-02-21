import { MemoryRouter } from "react-router-dom"
import { render, screen } from "../../test/test-utils"
import Header from "./Header"

describe("Header component", () => {
    test("should render header", () => {
        render(<MemoryRouter><Header /></MemoryRouter>)
        const header = screen.getByRole("banner")
        expect(header).toBeVisible()
    })
})