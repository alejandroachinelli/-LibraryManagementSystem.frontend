import { Col, Card, Pagination, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { BookService } from '../../../application/services/Book.service';
import { setBooks } from '../../../infrastructure/redux/slices/library';
import { setLoading, setShowModal } from '../../../infrastructure/redux/slices/ui';
import ModalAddBook from '../ModalAddBook/ModalAddBook';
import { useTranslation } from 'react-i18next';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.library.books);
    const loading = useSelector(state => state.ui.loading);

    const { t } = useTranslation();

    const initBooks = async() => {
        dispatch(setLoading(true));

        setTimeout(async () => {
            const response = await BookService.getAllBooks();
            dispatch(setBooks(response.data));
            dispatch(setLoading(false)); // Finalizar carga
        }, 2000);
    }

    useEffect(() => {
        initBooks();
    }, [])

    const deleteBook = async(id: string) => {
        const response = await BookService.deleteBook(id);
        initBooks();
    }

    const showModal = (show: boolean) => {
        dispatch(setShowModal(show));
    }
    
    
    return (
        <div className="p-4">
                {
                    loading ? 
                    (
                        <>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                            </div>
                        </>
                    ) : 
                    (
                        <>
                            <ModalAddBook/>
                            <Col>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            {t("LibraryManagementSystem")}
                                        </Card.Title>
                                        <Button 
                                            className="btn btn-success label-btn label-end"
                                            onClick={() => showModal(true)}
                                        >
                                            {t("AddBook")}
                                            <i className="ri-add-line label-btn-icon ms-2"></i>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <Table striped className="table table-responsive text-wrap text-center table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{t("Title")}</th>
                                                    <th scope="col">{t("Authors")}</th>
                                                    <th scope="col">{t("Publisher")}</th>
                                                    <th scope="col">{t("PublicationYear")}</th>
                                                    <th scope="col">{t("PageCount")}</th>
                                                    <th scope="col">{t("Category")}</th>
                                                    <th scope="col">{t("AvailableCopies")}</th>
                                                    <th scope="col">{t("TotalCopies")}</th>
                                                    <th scope="col">{t("Actions")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {books.map((book)=>(
                                                <tr key={Math.random()}>
                                                    <td>
                                                        <span className="fw-semibold">{book.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.authors}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.publisher}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.publicationYear}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.pageCount}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.category}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.availableCopies}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{book.totalCopies}</span>
                                                    </td>
                                                    <td>
                                                        <div className="mb-md-0 mb-2">
                                                            <Button 
                                                                variant="danger" 
                                                                className="btn btn-icon btn-wave"
                                                                onClick={()=> deleteBook(book.id)}
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                    <Card.Footer className="">
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </>
                    )
                }
        </div>
    );
};

export default BookList;