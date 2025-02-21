import { MemoryRouter } from "react-router-dom";
import { render } from "../../test/test-utils";
import AboutMe from "./AboutMe";
import {
  setupIntersectionMocking,
  resetIntersectionMocking,
} from "react-intersection-observer/test-utils";

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  resetIntersectionMocking();
});

describe("AboutMe page", () => {
  test("should render", () => {
    render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
  });
});
