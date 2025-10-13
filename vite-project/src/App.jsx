import {Route,Routes} from 'react-router-dom'
import './App.css'
import LandPage from './pages/LandPage'
import CreateAccount from './pages/CreateAccoutntPage'
import SignIn from './pages/SigninPage'
import AccountInfo from './pages/AccountInfoPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path='/create-account' element={<CreateAccount/>}  />
        <Route path='/sign-in' element={<SignIn/>}  />
        <Route path='/account-info' element={<AccountInfo/>}  />

        
        
      
      </Routes>
    </>
  )
}

export default App
