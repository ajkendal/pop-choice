export async function fetchMovies(messages: any) {
  try {
    const url =
      'https://corsproxy.io/?' +
      'https://pop-choice.ajkendal-openai.workers.dev/';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}
