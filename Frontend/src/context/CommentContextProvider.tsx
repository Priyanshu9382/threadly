import React, { useState, type ReactNode } from 'react'
import { CommentContext } from './CommentContext'
import { type CommentType } from '../types/interface'

export const CommentContextProvider: React.FC<{children:ReactNode}> = ({children}) => {
    // const [_id] = useState<number|string|null>(null)
    // const [author] = useState<string|null>(null)
    // const [content] = useState<string|null>(null)
    // const [parentId] = useState<string|null>(null)
    // const [upvote] = useState<number|null>(null)
    const [comments] = useState<CommentType[]|null>(null)
  return (
    <CommentContext.Provider value={{comments}}>
        {children}
    </CommentContext.Provider>
  )
}


