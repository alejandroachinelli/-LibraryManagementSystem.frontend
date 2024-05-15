import { Book } from "../../domain/models/Book";
import { LoanBook } from "../../domain/models/LoanBook";
import { Response } from "../../domain/models/Response";
import { http } from "../http/http";

export const BookRepository = {
    getAllBooks: async (): Promise<Response<Book[]>> => {
        const response = await http.get<Response<Book[]>>('https://localhost:7163/api/Book/GetAllBooks');
        return response;
    },
    getAllLoanBooks: async (): Promise<Response<LoanBook[]>> => {
        const response = await http.get<Response<LoanBook[]>>('https://localhost:7163/api/Book/GetAllLoanedBooks');
        return response;
    },
    deleteBook: async (id: string): Promise<Response<boolean>> => {
        const response = await http.delete<Response<boolean>>(`https://localhost:7163/api/Book/DeleteBook/${id}`);
        return response;
    },
    addBook: async (book: Book): Promise<Response<Book>> => {
        const response = await http.post<Response<Book>>('https://localhost:7163/api/Book/InsertBook', book);
        return response;
    },
    addLoanBook: async (book: LoanBook): Promise<Response<LoanBook>> => {
        const response = await http.put<Response<LoanBook>>('https://localhost:7163/api/Book/LendBook', book);
        return response;
    },
    returnBook: async (book: LoanBook): Promise<Response<LoanBook>> => {
        const response = await http.put<Response<LoanBook>>('https://localhost:7163/api/Book/ReturnBook', book);
        return response;
    },
    returnAllBook: async (): Promise<Response<boolean>> => {
        const response = await http.delete<Response<boolean>>('https://localhost:7163/api/Book/ReturnAllBook');
        return response;
    }
}