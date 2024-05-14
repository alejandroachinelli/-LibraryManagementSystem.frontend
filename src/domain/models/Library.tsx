import { Book } from "./Book"

export type Library = {
    books: Book[]
    loanBooks: any,
    currentPage: number,
    pageSize: number
    totalPages: number
}