import { render, screen } from "../../test/test-utils"
import DeleteIcon from "./DeleteIcon"

describe("DeleteIcon component", () => {
    test("should render img", () => {
        render(<DeleteIcon removeFunction={vi.fn()} />)
        const icon = screen.getByRole("img")
        expect(icon).toBeVisible()
    })
})