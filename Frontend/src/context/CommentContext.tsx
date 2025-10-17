import { createContext } from "react"
import {type CommentContextType } from "../types/interface"
import comments from '../../Data/comments.json'

export const CommentContext = createContext<CommentContextType|undefined>({comments})

