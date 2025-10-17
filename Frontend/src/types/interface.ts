import type { Dispatch, SetStateAction } from "react";

export interface UserInfo {
    _id: string,
    email: string,
    avatar: string,
    role: 'user' | 'admin',
    loggedIn: boolean
}


export interface CommentType {
  _id: number | string;
  postId: string | null;
  author: string;
  content: string;
  parentId: string | number| null;
  upvote: number;
  downvote: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommentContextType {
  comments:CommentType[] | null
  setComments: Dispatch<SetStateAction<CommentType[]>>
}

export interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
}
