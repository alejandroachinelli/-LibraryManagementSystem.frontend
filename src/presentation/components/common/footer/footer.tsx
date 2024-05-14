import  { FC , Fragment} from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return(
  <Fragment>
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted">2024<span id="year"></span> <a
                        href="#" className="text-dark fw-semibold">Redbrow</a>.
                    Designed with by <a href="#">
                        <span className="fw-semibold text-primary text-decoration-underline">Redbrow</span>
                    </a>. All
                    rights
                    reserved.
                </span>
            </div>
        </footer>
  </Fragment>
);
};

export default Footer;
