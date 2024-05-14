import BookList from '../../components/BookList/BookList';

const Library = () => {    
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                <BookList />
            </div>
        </div>
    );
};

export default Library;