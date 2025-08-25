import { Mastra } from "mastra";
import { motherAgent } from "./agents/mother";

export const mastra = new Mastra({
  agents: { mother: motherAgent }
});
