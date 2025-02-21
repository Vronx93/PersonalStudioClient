import { MemoryRouter } from "react-router-dom"
import {screen, render} from "../../test/test-utils"
import ShopNav from "./ShopNav"

describe("ShopNav component", () => {
    test("should render nav and 2 links", () => {
        render(<MemoryRouter><ShopNav /></MemoryRouter>)
        const nav = screen.getByRole("navigation")
        const links = screen.getAllByRole("link")
        expect(nav).toBeVisible()
        expect(links).toHaveLength(2)
    })
})