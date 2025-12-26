export interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  url: string;
  source: string;
  type: 'web' | 'news' | 'video';
  thumbnail?: string;
  date?: string;
}
