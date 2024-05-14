import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../infrastructure/redux/slices/ui';
import { Book } from '../../../domain/models/Book';
import { BookService } from '../../../application/services/Book.service';
import { setBooks } from '../../../infrastructure/redux/slices/library';
import { useTranslation } from 'react-i18next';

export default function ModalAddBook () {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const showModal = useSelector(state => state.ui.showModal);

    const closeModal = (show: boolean) => {
        dispatch(setShowModal(show));
    }

    const initBooks = async() => {
        const response = await BookService.getAllBooks();
        dispatch(setBooks(response.data));
    }

    const addBook = async (event: any) => {
        event.preventDefault();

        const formElements = event.target.elements;

        const newBook: Book = {
            title: formElements.title.value,
            authors: formElements.authors.value,
            publisher: formElements.publisher.value,
            publicationYear: parseInt(formElements.publicationYear.value),
            pageCount: parseInt(formElements.pageCount.value),
            category: formElements.category.value,
            availableCopies: parseInt(formElements.availableCopies.value),
            totalCopies: parseInt(formElements.totalCopies.value)
        };

        const response = await BookService.addBook(newBook);
        
        initBooks();

        closeModal(false);
    }

  return(
        <Modal show={showModal} fullscreen='lg-down' onHide={() => closeModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{t("AddBook")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row gy-4">
                    <Form onSubmit={(event: any) => addBook(event)}>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("Title")}</Form.Label>
                                <Form.Control type="text" id="title" name="title"/>
                            </Col>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("Authors")}</Form.Label>
                                <Form.Control type="text" id="authors" name="authors"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("Publisher")}</Form.Label>
                                <Form.Control type="text" id="publisher" name="publisher"/>
                            </Col>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("PublicationYear")}</Form.Label>
                                <Form.Control type="text" id="publicationYear" name="publicationYear"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("PageCount")}</Form.Label>
                                <Form.Control type="text" id="pageCount" name="pageCount"/>
                            </Col>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("Category")}</Form.Label>
                                <Form.Control type="text" id="category" name="category"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("AvailableCopies")}</Form.Label>
                                <Form.Control type="text" id="availableCopies" name="availableCopies"/>
                            </Col>
                            <Col className="p-3">
                                <Form.Label htmlFor="input-label">{t("TotalCopies")}</Form.Label>
                                <Form.Control type="text" id="totalCopies" name="totalCopies"/>
                            </Col>
                        </Row>
                        <Row>
                            <Button 
                                className="btn btn-success label-btn label-end"
                                type="submit"
                            >
                                {t("AddBook")}
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
  )}