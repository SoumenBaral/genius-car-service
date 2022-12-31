import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Login from '../src/pages/Login/Login'
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import ServiceDetail from './pages/ServiceDetails/ServiceDetail';
import NotFound from './Shared/NotFound';
import SignUp from './pages/Login/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes >
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
