import { MemoryRouter } from "react-router-dom"
import {render, screen} from "../../test/test-utils"
import Button from "./Button"

describe("Button component", () => {
    test("should render link with correct text and href", () => {
        render(<MemoryRouter><Button link={"example.com"} text={"Click me"}/></MemoryRouter>)
        const link = screen.getByRole("link")
        expect(link).toBeVisible()
        expect(link).toHaveTextContent(/click me/i)
        expect(link).toHaveAttribute("href", "/example.com")
    })
})