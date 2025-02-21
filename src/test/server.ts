import { setupServer } from "msw/node";
import { successGetHandlers } from "./mocks/handlers";

export const server = setupServer(...successGetHandlers)

