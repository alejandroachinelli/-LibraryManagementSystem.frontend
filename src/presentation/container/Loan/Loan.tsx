import BookLoan from '../../components/BookLoan/BookLoan';

const Loan = () => {    
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                <BookLoan />
            </div>
        </div>
    );
};

export default Loan;