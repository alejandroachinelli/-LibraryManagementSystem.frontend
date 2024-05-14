import { Fragment } from 'react';
import { Dropdown, Navbar, Container, Nav, Button } from 'react-bootstrap';
import us from "../../../assets/images/flags/estados-unidos.png";
import spain from "../../../assets/images/flags/españa.png";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <Fragment>
            <Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
                <Container fluid>
                    <Navbar.Brand href="#">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="" id="navbarSupportedContent">
                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Nav.Item>
                                <Button>
                                    {t("Home")}
                                </Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button>
                                    {t("RequestBookLoan")}
                                </Button>
                            </Nav.Item>
                        </Nav>
                        <div className="header-content-left">
                        <Dropdown className="header-element country-selector">
                            <Dropdown.Toggle variant=''  className="btn btn-primary header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                {t("SelectLanguage")}</Dropdown.Toggle>
                            <Dropdown.Menu align="end" as="ul" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#" onClick={() => changeLanguage("en")}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={us} alt="img" />
                                    </span>
                                    {t("English")}
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#" onClick={() => changeLanguage("es")}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={spain} alt="img" />
                                    </span>
                                    {t("Spanish")}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};
export default Header;
