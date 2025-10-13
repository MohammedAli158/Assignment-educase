import { useNavigate } from "react-router-dom"

const SignIn =  () =>{
    const nav = useNavigate()
    return(
        <>
        <h1>this is sign-in page</h1>
        <button onClick={()=>nav('/account-info')} >click</button>
        </>
        
    )
} 
export default SignIn