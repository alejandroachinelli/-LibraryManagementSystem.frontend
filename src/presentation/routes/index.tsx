import { Route, Routes as Router  } from 'react-router-dom';
import Library from '../container/Library/Library.tsx';
import Loan from '../container/Loan/Loan.tsx';

const Routes = () => {
    return (
        <Router>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Library />} />
            <Route path={`${import.meta.env.BASE_URL}/Loan`} element={<Loan />} />
        </Router>
    )
}

export default Routes;