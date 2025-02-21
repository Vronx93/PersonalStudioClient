import { mockItem1 } from "../../test/mocks/mockData"
import { render, screen } from "../../test/test-utils"
import AddToCartBtn from "./AddToCartBtn"

describe("AddToCartBtn component", () => {
    beforeEach(() => {
        render(<AddToCartBtn item={mockItem1} quantity={1} path={""} />)
    })

    test("should render button", () => {
        const button = screen.getByRole("button")
        expect(button).toBeVisible()
    })
    
    test("after clicked should add to cart correct amount of items ", () => {

    })
})