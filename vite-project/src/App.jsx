import {Route,Routes} from 'react-router-dom'
import './App.css'
import LandPage from './pages/LandPage'
import CreateAccount from './pages/CreateAccoutntPage'
import SignIn from './pages/SigninPage'
import AccountInfo from './pages/AccountInfoPage'
import { createContext,  useState } from 'react'
function App() {
  let [info,setInfo] = useState(['name','email']) 
  return (
    <UserContext.Provider value={{info,setInfo}}>
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path='/create-account' element={<CreateAccount/>}  />
        <Route path='/sign-in' element={<SignIn/>}  />
        <Route path='/account-info' element={<AccountInfo/>}  />

        
        
      
      </Routes>
    </ UserContext.Provider>
  )
}

export const UserContext = createContext([]) 
export default App
