import { getAccessToken } from './get-access-token';
import { loadEnvVariables } from './load-env-variables';

export async function main(): Promise<void> {
  const { clientId, clientSecret } = loadEnvVariables();

  const token = await getAccessToken(clientId, clientSecret);

  debugger;
}
