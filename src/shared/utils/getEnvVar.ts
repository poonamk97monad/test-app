export function getEnvVar(env: string) {
  return process?.env?.[env];
}

export const ENV_VARS = {
  app: getEnvVar('APP')
} as const;
