export async function fetchTMDBMovies(data: any) {
  try {
    const url =
      'https://corsproxy.io/?' +
      'https://tmdb-call.ajkendal-openai.workers.dev/';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const results = await response.json();

    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}
