import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from '../Screens/Admin';
import Login from '../Screens/Login';

const RouteFunc = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={ <Admin /> } />
        <Route path='/' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteFunc;
