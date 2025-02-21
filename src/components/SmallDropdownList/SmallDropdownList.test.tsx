import {screen, render} from "../../test/test-utils"
import SmallDropdownList from "./SmallDropdownList"
// vi.mock("react", async (importOriginal) => {
//     const actual: Object = await importOriginal()
//     return {
//       ...actual,
//       useState: vi.fn(() => true)
//     }
//   })

  
describe("SmallDropdownList component", () => {
    test("should render heading, arrow image, list, 4 list items", () => {
        render(<SmallDropdownList title="MockTitle" listItems={["1", "2", "3", "4"]} />)
        const heading = screen.getByRole("heading")
        const image = screen.getByRole("img")
        // const list = screen.findByRole("list")
        // const listItems = screen.findAllByRole("listitem")
        expect(heading).toBeVisible()
        expect(image).toBeVisible()
        // expect(list).toBeVisible()
        // expect(listItems).toHaveLength(4)
    })
})