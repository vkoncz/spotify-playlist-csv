import { getPlaylist } from './get-playlist';
import { Playlist } from './playlist.model';

export function getMultiplePlaylist(token: string, playListIds: string[]): Promise<FlatPlaylist[]> {
  const requests = playListIds.map(playlistId => getPlaylist(token, playlistId).then(flatPlaylist));

  return Promise.all(requests);
}

function flatPlaylist(playlist: Playlist) {
  const { items } = playlist.tracks;

  return {
    name: playlist.name,
    items: items.map(({ track }) => ({
      name: track.name,
      artist: track.artists.map(artist => artist.name).reduce((pre, curr) => `${pre}, ${curr}`),
      album: `${track.album.name} (${track.album.release_date})`,
      url: track.external_urls.spotify,
    })),
  };
}

export type FlatPlaylist = ReturnType<typeof flatPlaylist>;
