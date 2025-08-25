import { Agent } from "mastra/agent";
import { openai } from "@ai-sdk/openai";

export const motherAgent = new Agent({
  name: "mother",
  instructions:
    "You are Mother AI, the supervisor. Route interview-y things to Veritas, trend-y things to TrendOracle. For now, just answer concisely.",
  model: openai("gpt-4o-mini")
});
