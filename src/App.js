
import {useState, useEffect} from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyPage from './components/MyPage/MyPage';
import Create from './components/Create/Create';
import * as authService from './services/authService'
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false , username: ""})

  useEffect(()=>{
    let user=authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
  })
  }, [])

  const onLogin = (username)=>{
    setUserInfo({
      isAuthenticated: true,
      user:username
  })
  }

  const onLogout = ()=>{
    setUserInfo(
     { isAuthenticated: false,
      user:null,}
    )
  }

  return (
    <div className="App">
      <div id="container">

       <Header {...userInfo} />


        <main id="site-content">
          <Routes>
            <Route path='/dashboard/*' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login onLogin={onLogin}/>}></Route>
            <Route path='/logout' element={<Logout onLogout={onLogout}/>}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/my-pets' element={<MyPage />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path="/details/:petId" element={<Details />}></Route>

          </Routes>

        </main>

       
        
        
       <Footer />

      </div>
    </div>
  );
}

export default App;
