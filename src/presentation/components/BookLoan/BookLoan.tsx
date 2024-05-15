import { Col, Card, Pagination, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { setLoading, setShowModalLoan } from '../../../infrastructure/redux/slices/ui';
import { useTranslation } from 'react-i18next';
import ModalAddLoan from '../ModalAddLoan/ModalAddLoan';
import { BookService } from '../../../application/services/Book.service';
import { setBooks, setLoanBooks } from '../../../infrastructure/redux/slices/library';
import { format } from 'date-fns';
import { LoanBook } from '../../../domain/models/LoanBook';

const BookLoan = () => {
    const dispatch = useDispatch();
    const loanBooks = useSelector(state => state.library.loanBooks);
    const loading = useSelector(state => state.ui.loading);

    const { t } = useTranslation();

    const initLoan = async() => {
        dispatch(setLoading(true));

        setTimeout(async () => {
            const response = await BookService.getAllBooks();
            dispatch(setBooks(response.data));

            const responseLoan = await BookService.getAllLoanBooks();
            dispatch(setLoanBooks(responseLoan.data));
            
            dispatch(setLoading(false));
        }, 2000);
    }

    useEffect(() => {
        initLoan();
    }, [])

    const showModal = (show: boolean) => {
        dispatch(setShowModalLoan(show));
    }

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    }

    const returnBook = async (loanBook: LoanBook) => {
        const response = await BookService.returnBook(loanBook);
        initLoan();
    }

    const returnAllBook = async () => {
        const response = await BookService.returnAllBook();
        initLoan();
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
                            <ModalAddLoan/>
                            <Col>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            {t("LibraryLoansMade")}
                                        </Card.Title>
                                        <Button 
                                            className="btn btn-success label-btn label-end"
                                            onClick={() => showModal(true)}
                                        >
                                            {t("RequestALoan")}
                                            <i className="ri-add-line label-btn-icon ms-2"></i>
                                        </Button>
                                        <Button 
                                            className="btn btn-danger label-btn label-end"
                                            onClick={()=> returnAllBook()}
                                        >
                                            {t("ReturnAll")}
                                            <i className="ri-arrow-go-back-line label-btn-icon ms-2"></i>
                                        </Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <Table striped className="table table-responsive text-wrap text-center table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{t("Title")}</th>
                                                    <th scope="col">{t("Authors")}</th>
                                                    <th scope="col">{t("Category")}</th>
                                                    <th scope="col">{t("DateFrom")}</th>
                                                    <th scope="col">{t("DateTo")}</th>
                                                    <th scope="col">{t("UserName")}</th>
                                                    <th scope="col">{t("UserLastName")}</th>
                                                    <th scope="col">{t("Return")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loanBooks.map((loanBook)=>(
                                                <tr key={Math.random()}>
                                                    <td>
                                                        <span className="fw-semibold">{loanBook.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{loanBook.authors}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{loanBook.category}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{formatDate(loanBook.dateFrom)}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{formatDate(loanBook.dateTo)}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{loanBook.userName}</span>
                                                    </td>
                                                    <td>
                                                        <span className="fw-semibold">{loanBook.userLastName}</span>
                                                    </td>
                                                    <td>
                                                        <div className="mb-md-0 mb-2">
                                                            <Button 
                                                                variant="primary" 
                                                                className="btn btn-icon btn-wave"
                                                                onClick={()=> returnBook(loanBook)}
                                                            >
                                                                <i className="ri-arrow-go-back-line"></i>
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

export default BookLoan;