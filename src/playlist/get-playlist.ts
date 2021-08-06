import axios from 'axios';
import { Playlist } from './playlist.model';

export function getPlaylist(token: string, playListId: string): Promise<Playlist> {
  return axios
    .get(`https://api.spotify.com/v1/playlists/${playListId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // params: {
      //   fields:
      //     'tracks(items(track(name, external_urls, artists(name), album(name, release_date))))',
      // },
    })
    .then(response => response.data);
}
