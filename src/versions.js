export const siteVariables = {
  // version-specific
  cliVersion: '1.2.0',
  runtimeVersion: '5.0.7',
  // Hacky variable so that we can use env var formatting in CI/CD templates
  deploymentid: '${ASTRONOMER_DEPLOYMENT_ID}',
  keyid: '${ASTRONOMER_KEY_ID}',
  keysecret: '${ASTRONOMER_KEY_SECRET}',
  // Hacky variable for droneci
  deploymentiddrone: '$ASTRONOMER_DEPLOYMENT_ID',
};
