export interface EnvVariables {
  clientId: string;
  clientSecret: string;
  playlistIds: string[];
}

export function loadEnvVariables(): EnvVariables {
  return {
    clientId: loadVariable('CLIENT_ID'),
    clientSecret: loadVariable('CLIENT_SECRET'),
    playlistIds: JSON.parse(loadVariable('PLAYLIST_IDS')),
  };
}

function loadVariable(processEnv: string): string {
  const variable = process.env[processEnv];
  if (!variable) throw Error(`Environment variable missing: ${processEnv}`);

  return variable;
}
