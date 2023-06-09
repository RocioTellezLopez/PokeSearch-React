import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../views/Home';
import FourOFour from '../views/404';
import PokeDetail from '../views/PokeDetail';
import ScrollToTop from '../components/ScrollToTop';

export default function RoutesPage () {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/pokemon/:id' element={<PokeDetail/>} />
        <Route element={<FourOFour/>} />
      </Routes>
    </BrowserRouter>

  );
}