export async function performSearch(query: string) {
  try {
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    const data = await response.json();
    return data.RelatedTopics.map((topic: any) => ({
      title: topic.Text,
      url: topic.FirstURL,
      snippet: topic.Text,
      source: 'DuckDuckGo'
    }));
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}
