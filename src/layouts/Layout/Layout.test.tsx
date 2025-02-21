import { screen, render } from "@testing-library/react";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

describe("Layout component", () => {
  test("should render", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </QueryClientProvider>
    );
    const layout = screen.queryByTestId("siteWrapper");
    expect(layout).toBeInTheDocument();
  });
});
