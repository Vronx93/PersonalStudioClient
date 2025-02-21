import { mockOnlineOptions } from "../../test/mocks/mockData";
import { render } from "../../test/test-utils";
import TrainingPackageList from "./TrainingPackageList";
import { MemoryRouter } from "react-router-dom";

describe("TrainingPackageList component", () => {
  test("", () => {
    render(
      <MemoryRouter>
        <TrainingPackageList onlineOptions={mockOnlineOptions} />
      </MemoryRouter>
    );
  });
});
