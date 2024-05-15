import { Book } from "./Book"
import { LoanBook } from "./LoanBook"

export type Library = {
    books: Book[]
    loanBooks: LoanBook[],
    currentPage: number,
    pageSize: number
    totalPages: number
}