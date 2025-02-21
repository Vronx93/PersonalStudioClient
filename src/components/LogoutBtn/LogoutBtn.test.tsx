import { MemoryRouter } from "react-router-dom";
import { useIsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { render, screen } from "../../test/test-utils";
import LogoutBtn from "./LogoutBtn";
vi.mock("../../contexts/IsLoggedInContext", () => ({
  useIsLoggedInContext: vi.fn(() => {
    return { isLoggedIn: true, logIn: vi.fn(), logOut: vi.fn() };
  }),
  IsLoggedInContextProvider: vi.fn(({ children }) => {
    return <div>{children}</div>;
  }),
}));

describe("LogoutBtn component, when user is logged in", () => {
  test("should be visible", async () => {
    render(
      <MemoryRouter>
        <LogoutBtn />
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toBeVisible();
  });
});

describe("LogoutBtn component, when user is NOT logged in", () => {
  test("should NOT be visible", () => {
    vi.mocked(useIsLoggedInContext).mockReturnValueOnce({
      isLoggedIn: false,
      logInAction: vi.fn(),
      logOutAction: vi.fn(),
    });
    render(
      <MemoryRouter>
        <LogoutBtn />
      </MemoryRouter>
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
