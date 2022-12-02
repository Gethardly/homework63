export interface PostType {
  id: string;
  header: string;
  created_at: string;
  body: string;
}

export type PostSend = Omit<PostType, 'id'>;

export interface NewPostType {
  header: string;
  created_at: string;
  body: string;
}

export interface PostsList {
  [id: string]: Dish;
}