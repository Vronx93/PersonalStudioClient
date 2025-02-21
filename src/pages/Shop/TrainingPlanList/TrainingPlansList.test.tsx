import { render, screen } from "../../../test/test-utils";
import TrainingPlansList from "./TrainingPlansList";
import { mockTrainingList } from "../../../test/mocks/mockData";
import { MemoryRouter } from "react-router-dom";
vi.mock("react-router-dom", async (importOriginal) => {
  const actual: object = await importOriginal();
  return {
    ...actual,
    useLoaderData: vi.fn(() => {
      return { onlinePlanOptionsPromise: mockTrainingList };
    }),
  };
});

describe("TrainingPlanList page - successfully fetched", () => {
  // should render 2 list items
  test("should render 17 list items", async () => {
    render(
      <MemoryRouter>
        <TrainingPlansList />
      </MemoryRouter>
    );
    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).toHaveLength(17);
  });
});

describe("TrainingPlanList page - fetch failed", () => {
  // should render error message
  test("", () => {});
});
