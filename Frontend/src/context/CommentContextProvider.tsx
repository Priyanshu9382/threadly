import React, { useState, type ReactNode } from "react";
import { CommentContext } from "./CommentContext";
import { type CommentType } from "../types/interface";
import commentsData from "../../Data/comments.json";

export const CommentContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<CommentType[]>(commentsData);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};
