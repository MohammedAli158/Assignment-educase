import { useNavigate } from "react-router-dom"

const CreateAccount =  () =>{
    let nav = useNavigate()
    return (
        <>
        <h1>This is Create Account Page</h1>
        <button onClick={()=>nav('/account-info')} >click</button>
        </>
    )
} 
export default CreateAccount