import { screen, render } from "../../test/test-utils"
import TrainingStepElement from "./TrainingStepElement"

describe("TrainingStepElement component", () => {
    test("should render icon and title")
    render(<TrainingStepElement icon={"/src/assets/images/orange-shield.png"} title={"Example title"} />)
    const icon = screen.getByRole("img")
    const title = screen.getByRole("heading")
    expect(icon).toBeVisible()
    expect(title).toBeVisible()
})