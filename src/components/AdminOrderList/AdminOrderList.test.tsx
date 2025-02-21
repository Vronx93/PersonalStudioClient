import { mockGetOrder } from "../../test/mocks/mockData";
import { render, screen } from "../../test/test-utils";
import AdminOrderList from "./AdminOrderList";

describe("AdminOrderList Component", () => {
  test("with 5 items should render list and 5 list items", () => {
    render(
      <AdminOrderList
        ordersList={[
          mockGetOrder,
          mockGetOrder,
          mockGetOrder,
          mockGetOrder,
          mockGetOrder,
        ]}
      />
    );
    const table = screen.getByRole("table");
    const tableRows = screen.getAllByRole("row");
    expect(table).toBeVisible();
    expect(tableRows).toHaveLength(6);
  });
});
