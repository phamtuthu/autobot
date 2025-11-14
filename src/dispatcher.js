import axios from "axios";
import { SCRIPT_MAP } from "./scriptMap.js";
import { GAS_SECRET } from "./config.js";

export async function dispatchAction(action) {
  const targetUrl = SCRIPT_MAP[action];
  if (!targetUrl) return `Action not found: ${action}`;

  const finalUrl = `${targetUrl}&token=${GAS_SECRET}`;

  try {
    const { data } = await axios.get(finalUrl, { timeout: 60000 });
    return `Success: ${data}`;
  } catch (err) {
    return `Error calling GAS: ${err.message}`;
  }
}
