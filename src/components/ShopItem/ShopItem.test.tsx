// import { render, screen } from "../../test/test-utils"
// import ShopItem from "./ShopItem"
// import { mockItem1 } from "../../test/mocks/mockData"
// import { userEvent } from "@testing-library/user-event"
// import { MemoryRouter } from "react-router-dom"
// import { useIsLoggedInContext } from "../../contexts/IsLoggedInContext"
// vi.mock("../ProductImagesList/ProductImagesList", () => ({
//     default: vi.fn(() => {
//         const images = [<p>Images should be here</p>, <p>Images..</p>]
//         return images
//     })
// }))
// vi.mock("../../contexts/IsLoggedInContext", () => ({
//     useIsLoggedInContext: vi.fn(),
//     IsLoggedInContextProvider: vi.fn(({children}) => {return <div>{children}</div>})
// }))
// vi.mocked(useIsLoggedInContext).mockReturnValue({
//     isLoggedIn: true,
//     logInAction: vi.fn(),
//     logOutAction: vi.fn()
// })


// describe("ShopItem component", () => {
//     beforeEach(() => {
//         render(<MemoryRouter><ShopItem item={mockItem1} /></MemoryRouter>)
//     })
//     const user = userEvent.setup()
//     // should have name, price, description, image?, button, input
//     test("should render with title, price, description, input and button", () => {
//         const name = screen.getByText(mockItem1.name)
//         const price = screen.getByTestId("price")
//         const description = screen.getByText(mockItem1.description)
//         const priceInput = screen.getByRole("spinbutton")
//         const addToCartBtn = screen.getByRole("button")
//         expect(name).toBeVisible()
//         expect(price).toBeVisible()
//         expect(description).toBeVisible()
//         expect(priceInput).toBeVisible()
//         expect(addToCartBtn).toBeVisible()
//     })

//     test("should allow user to change quantity", async () => {
//         const quantityInput : HTMLInputElement = await screen.findByRole("spinbutton")
//         await user.clear(quantityInput)
//         await user.type(quantityInput, "5")
//         expect(quantityInput.value).toBe("5")
//     })

//     test("should correctly update price after quantity change", async () => {
//         const quantityInput : HTMLInputElement = await screen.findByRole("spinbutton")
//         const totalPrice = await screen.findByTestId("total-price")
//         await user.clear(quantityInput)
//         await user.type(quantityInput, "5")
//         expect(quantityInput.value).toBe("5")
//         expect(totalPrice.textContent).toBe((mockItem1.price * 5).toString())
//     })
// })

test("dummy test, it will be updated later ", () => {

})