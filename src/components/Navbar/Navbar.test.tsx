import { render, screen } from "../../test/test-utils"
import Navbar from "./Navbar"
import { MemoryRouter } from "react-router-dom"

describe("Navbar component", () => {
    test("should render all navigation links", () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const navLinks = screen.getAllByRole("link")
        expect(navLinks).toHaveLength(5)
    })
})