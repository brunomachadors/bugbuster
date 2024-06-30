export interface IPost {
  id: string;
  title: string;
  banner: string;
  content: Array<{
    type: 'text' | 'image';
    value: string;
  }>;
  author: string;
}

export interface MediumPost {
  title: string;
  pubDate: string;
  content: string;
  author: string;
  categories: string[];
  thumbnail?: string | null; // Allow thumbnail to be string or null
}
