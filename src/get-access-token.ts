import axios from 'axios';

interface SpotifyTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export function getAccessToken(clientId: string, clientSecret: string): Promise<string> {
  const encodedToken = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  return axios
    .post<SpotifyTokenResponse>('https://accounts.spotify.com/api/token', undefined, {
      params: {
        grant_type: 'client_credentials',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedToken}`,
      },
    })
    .then(response => response.data.access_token);
}
