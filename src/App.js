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
import RequireAuth from './Shared/RercureAuth/RequireAuth';
import CheckOut from './pages/CheckOut/CheckOut';
import AddService from './pages/AddService/AddService';
import ManageService from './pages/ManageService/ManageService';
import { ToastContainer } from 'react-bootstrap';
import Order from './pages/Order/Order';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes >
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <RequireAuth>'
            <About></About>
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>}>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
