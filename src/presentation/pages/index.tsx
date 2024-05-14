
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import { Provider } from "react-redux";
import store from '../../infrastructure/redux/store/index.tsx';
import Loader from '../components/common/loader/loader.tsx';
import Header from '../components/common/header/header.tsx';


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <React.Suspense fallback={<Loader/>}>
            <Routes />
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
