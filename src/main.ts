import { getAccessToken } from './get-access-token';
import { loadEnvVariables } from './load-env-variables';
import { getMultiplePlaylist } from './playlist/get-multiple-playlist';
import { writeCsvFiles } from './write-csv/write-csv-files';

export async function main(): Promise<void> {
  const { clientId, clientSecret, playlistIds } = loadEnvVariables();
  const token = await getAccessToken(clientId, clientSecret);
  const playlists = await getMultiplePlaylist(token, playlistIds);

  await writeCsvFiles(playlists);
}
