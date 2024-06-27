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
