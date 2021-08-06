import { FlatPlaylist } from '../playlist/get-multiple-playlist';
import { makeCsv } from './make-csv';
import { writeFile } from 'fs/promises';

function convertToValidFilename(string: string) {
  return string.replace(/[\\/|\\:*?"<>]/g, ' ');
}

export async function writeCsvFiles(playlists: FlatPlaylist[]): Promise<void> {
  const promises = playlists.map(playlist => {
    const csv = makeCsv(playlist);
    const fileName = `${convertToValidFilename(playlist.name)}.csv`;

    return writeFile(fileName, csv);
  });

  await Promise.all(promises);
}
