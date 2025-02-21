import { render, screen } from "../../test/test-utils"
import BenefitElement from "./BenefitElement"
import benefits from "../../benefits.json"

describe("BenefitElement component", () => {
    test("should render heading and text", () => {
        render(<BenefitElement benefit={benefits[0]} />)
        const heading = screen.getByRole("heading")
        const text = screen.getByText(/współpracując ze mną/i)
        expect(heading).toBeVisible()
        expect(text).toBeVisible()
    })
})