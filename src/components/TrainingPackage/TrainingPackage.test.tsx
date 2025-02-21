import { render, screen } from "../../test/test-utils"
import TrainingPackage from "./TrainingPackage"
import { mockTraining1 } from "../../test/mocks/mockData"
import { MemoryRouter } from "react-router-dom"
vi.mock("../ProductImagesList/ProductImagesList", () => ({
    default: vi.fn(() => {
        return <p>Images should be here</p>
    })
}))

describe("TrainingPackage component", () => {
    // should render AddToCartBtn, name, price, description, image?
    test("should render AddToCartBtn, name, price, description", () => {
        render(<MemoryRouter><TrainingPackage trainingItemData={mockTraining1} /></MemoryRouter>)
        const addToCartBtn = screen.getByRole("button")
        const name = screen.getByRole("heading")
        expect(addToCartBtn).toBeVisible()
        expect(name).toBeVisible()
    })
})

