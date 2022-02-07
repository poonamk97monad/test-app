import { config } from "@static/js/env.config";
import { LoginManager } from "../auth/loginManager";

export const setup = () => {
  const loginManager = new LoginManager();
  return { config, loginManager };
};
