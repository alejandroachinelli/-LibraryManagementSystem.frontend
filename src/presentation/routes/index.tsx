import Library from '../container/Library/Library.tsx';
import { Route, Routes as Router  } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Library />} />
        </Router>
    )
}

export default Routes;