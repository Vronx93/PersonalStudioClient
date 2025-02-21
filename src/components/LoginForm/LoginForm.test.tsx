import { render, screen } from "../../test/test-utils"
import LoginForm from "./LoginForm"
vi.mock("react-router-dom", () => ({
    Form: vi.fn(({children}) => children),
    useNavigate: vi.fn(),
    useNavigation: vi.fn(() => {return {state: "idle"}})
}))

describe("LoginForm component", () => {
    beforeEach(() => {
        render(<LoginForm />)
    })
    test("should render submit button and inputs of login, password", () => {
        const emailInput = screen.getByPlaceholderText(/email/i)
        const passwordInput = screen.getByPlaceholderText(/hasło/i)
        const loginBtn = screen.getByRole("button")
        expect(emailInput).toBeVisible()
        expect(passwordInput).toBeVisible()
        expect(loginBtn).toBeVisible()
    })
})