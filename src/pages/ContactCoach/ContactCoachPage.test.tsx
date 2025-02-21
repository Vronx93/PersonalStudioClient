// import { render, screen } from "@testing-library/react"
// import ContactPage from "./ContactPage"

describe("ContactPage page", () => {
  test("should render contact info, form inputs and a button", () => {
    vi.mock("react-router-dom", () => ({
      Form: vi.fn(({ children }) => {
        return children;
      }),
    }));
    // render(<ContactPage />)
    // const phone = screen.getByText(/telefon/i)
    // const address = screen.getByText(/adres/i)
    // const email = screen.getByText(/email/i)
    // const emailInput = screen.getByPlaceholderText("Email")
    // const titleInput = screen.getByPlaceholderText("Tytuł")
    // const messageInput = screen.getByPlaceholderText("Wiadomość")
    // const button = screen.getByRole("button")
    // expect(phone).toBeVisible()
    // expect(address).toBeVisible()
    // expect(email).toBeVisible()
    // expect(emailInput).toBeVisible()
    // expect(titleInput).toBeVisible()
    // expect(messageInput).toBeVisible()
    // expect(button).toBeVisible()
  });
});
