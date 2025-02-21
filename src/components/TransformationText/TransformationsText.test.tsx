import { screen, render } from "../../test/test-utils"
import TransformationsText from "./TransofmationsText"

describe("TransformationText component", () => {
    test("should render heading", () => {
        render(<TransformationsText />)
        const title = screen.getByRole("heading")
        expect(title).toBeVisible()
    })
})