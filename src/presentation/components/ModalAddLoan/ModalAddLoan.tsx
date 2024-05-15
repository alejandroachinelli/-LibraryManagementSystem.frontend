import { Modal, Col, Row, Form, Button, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModalLoan } from '../../../infrastructure/redux/slices/ui';
import { Book } from '../../../domain/models/Book';
import { BookService } from '../../../application/services/Book.service';
import { setBooks, setLoanBooks } from '../../../infrastructure/redux/slices/library';
import { useTranslation } from 'react-i18next';
import { LoanBook } from '../../../domain/models/LoanBook';
import { useState } from 'react';

export default function ModalAddLoan () {
    const dispatch = useDispatch();
    const [bookSelectedId, setBookSelectedId] = useState('')
    const { t } = useTranslation();

    const showModalLoan = useSelector(state => state.ui.showModalLoan);
    const books = useSelector(state => state.library.books);

    const handleBookChange = (event: any) => {
        setBookSelectedId(event.target.value);
    };

    const closeModal = (show: boolean) => {
        dispatch(setShowModalLoan(show));
    }

    const initBooks = async() => {
        const response = await BookService.getAllBooks();
        dispatch(setBooks(response.data));

        const responseLoan = await BookService.getAllLoanBooks();
        dispatch(setLoanBooks(responseLoan.data));
    }

    const addLoanBook = async (event: any) => {
        event.preventDefault();

        const formElements = event.target.elements;
        const bookId = bookSelectedId;
        const dateTo = formElements.dateTo.value;
        const userName = formElements.userName.value;
        const userLastName = formElements.userLastName.value;

        if(!bookId || !dateTo || !userName || !userLastName){
            
        }else{
            const newLoanBook: LoanBook = {
                bookId: bookSelectedId,
                dateTo: formElements.dateTo.value,
                userName: formElements.userName.value,
                userLastName: formElements.userLastName.value
            };
    
            const response = await BookService.addLoanBook(newLoanBook);
            
            initBooks();
    
            closeModal(false);
        }
        
    }

  return(
    <>
        <Modal show={showModalLoan} fullscreen='lg-down' onHide={() => closeModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{t("RequestALoan")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row gy-4">
                    <Form onSubmit={(event: any) => addLoanBook(event)}>
                        <Row>
                            <Col className="p-3">
                                <Form.Select onChange={handleBookChange} aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    {books.map((book)=>(    
                                        <option value={book.id}>{book.title}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("UserName")}</Form.Label>
                                <Form.Control type="text" id="userName" name="userName"/>
                            </Col>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("UserLastName")}</Form.Label>
                                <Form.Control type="text" id="userLastName" name="userLastName"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("DateTo")}</Form.Label>
                                <Form.Control type="date" id="dateTo" name="dateTo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Button 
                                className="btn btn-success label-btn label-end"
                                type="submit"
                            >
                                {t("AddLoan")}
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    </>
  )}