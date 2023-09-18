const server = Bun.serve({
  port: 3000,
  async fetch(_req) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    headers.append('Access-Control-Allow-Credentials', 'false');
    headers.append('Access-Control-Max-Age', '86400');

    const resp = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${Bun.env.LAST_FM_REGISTRANT}&api_key=${Bun.env.LAST_FM_API_KEY}&format=json`
    );
    const respJson = await resp.json();
    const recentTrack = respJson['recenttracks']?.track[0];

    console.log(recentTrack);

    return new Response(JSON.stringify(recentTrack), {
      headers: headers,
    });
  },
});
