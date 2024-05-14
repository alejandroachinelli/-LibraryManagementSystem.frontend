import { Book } from '../../domain/models/Book';
import { Response } from '../../domain/models/Response';
import { BookRepository } from '../../infrastructure/repositories/Book.repository';

export const BookService = {
    getAllBooks: async (): Promise<Response<Book[]>> => {
        try{
            const response = await BookRepository.getAllBooks();
            return response;
        }catch(error){
            return {
                data: [],
                error: true,
                message: 'GetAllBooksFailed'
            }
        }
    },
    deleteBook: async (id: string): Promise<Response<boolean>> => {
        try{
            const response = await BookRepository.deleteBook(id);
            return response;
        }catch(error){
            return {
                data: false,
                error: true,
                message: 'DeleteBookFailed'
            }
        }
    },
    addBook: async (book: Book): Promise<Response<Book>> => {
        try{
            const response = await BookRepository.addBook(book);
            return response;
        }catch(error){
            const emptyBook: Book = {
                id: '',
                title: '',
                authors: '',
                publisher: '',
                publicationYear: 0,
                pageCount: 0,
                category: '',
                availableCopies: 0,
                totalCopies: 0
            };

            return {
                data: emptyBook,
                error: true,
                message: 'AddBookFailed'
            }
        }
    }
}