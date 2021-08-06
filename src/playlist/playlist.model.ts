export interface Playlist {
  name: string;
  tracks: Tracks;
}

export interface Tracks {
  items: Item[];
}

export interface Item {
  track: Track;
}

export interface Track {
  album: Album;
  artists: Artist[];
  external_urls: ExternalUrls;
  name: string;
}

export interface Album {
  name: string;
  release_date: string;
}

export interface Artist {
  name: string;
}

export interface ExternalUrls {
  spotify: string;
}
