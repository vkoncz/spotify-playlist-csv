import { FlatPlaylist } from '../playlist/get-multiple-playlist';
import { EOL } from 'os';

const separator = '|';
const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export function makeCsv(playlist: FlatPlaylist): string {
  let csv = '';
  csv +=
    Object.entries(playlist.items[0])
      .map(array => capitalize(array[0]))
      .join(separator) + EOL; // header

  playlist.items.forEach(item => {
    csv +=
      Object.entries(item)
        .map(array => array[1])
        .join(separator) + EOL;
  });

  return csv;
}
