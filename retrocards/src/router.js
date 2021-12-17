import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import CreateSprint from './Pages/CreateSprint';
import CreateRetrospectiva from './Pages/CreateRetrospectiva';
import CreateKudoCards from './Pages/CreateKudoCards';
import CreateKudoBox from './Pages/CreateKudoBox';
import CreateItems from './Pages/CreateItems';
import Login from './Pages/Login';
import InitialPage from './Pages/InitialPage';
import Sprint from './Pages/Sprint';
import Retrospectiva from './Pages/Retrospectiva';
import KudoBox from './Pages/KudoBox';
import KudoCard from './Pages/KudoCard';
import Emails from './Pages/Emails';
import NotFound from './Pages/NotFound';
import Loading from './components/loading/Loading'


function Routers (){
  const{auth, setAuth} = useContext(AuthContext)

  const localToken = localStorage.getItem('token')
  
  useEffect (()=>{

    if (localToken){
      setAuth(true)
    }
  
  },[])

  return(
    <BrowserRouter>
      {auth? 
      <Routes>
        <Route path='/initialpage' element={<InitialPage/>}/>
        <Route path='/createsprint' element={<CreateSprint/>}/>
        <Route path='/sprint' element={<Sprint/>}/>
        <Route path='/kudobox' element={<KudoBox/>}/>
        <Route path='/kudocard' element={<KudoCard/>}/>
        <Route path='/createretrospectiva' element={<CreateRetrospectiva/>}/>
        <Route path='/createkudocards' element={<CreateKudoCards/>}/>
        <Route path='/createkudobox' element={<CreateKudoBox/>}/>
        <Route path='/createitems' element={<CreateItems/>}/>
        <Route path='/retrospectiva' element={<Retrospectiva/>}/>
        <Route path='/emails' element={<Emails/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      :
      <Routes>
        <Route path='/' element={<login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      }
      
    </BrowserRouter>    

  )
}

export default Routers;