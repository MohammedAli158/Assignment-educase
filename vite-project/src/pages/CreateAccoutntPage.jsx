import { useNavigate } from "react-router-dom"
import Rectangle from "../components/rectangular-buttonComponent"
import { generatePassword } from "../util/Password"
import {toast,Toaster} from 'react-hot-toast'
import { useContext } from "react"
import { UserContext } from "../App"

const CreateAccount =  () =>{
    let placeholderPass = generatePassword()+" (Automatically generated)"
    const overlap = ['Full Name','Phone Number','Email Address','Password','Company Name']
    const placeholders = ['Marry Doe','+91xxxxxxx','MarryDoe@PopX.com',placeholderPass,"Marry's company"]
    const {setInfo} = useContext(UserContext)
    let nav = useNavigate()
    const handleInputOnclick = (e)=>{
        if (e.target.placeholder == placeholderPass) {
            let pass = e.target.placeholder
            let passAR = pass.replace(/\s*\(Automatically generated\)\s*/i, "");
            e.target.value = passAR

        }
    }
    const handleSubmit = () =>{
        for (let index = 0; index <overlap.length; index++) {
            const ele = document.getElementById(index)
           if (ele.value=="") {
            return toast.error("Please fill all the fields")
           }
           let radio5 = document.getElementById('yes')
           let radio6 = document.getElementById('no')
           if (!radio5.checked && !radio6.checked) {
            return toast.error("Are you an agency")
           }
            
        }
        let fullname = document.getElementById('0')
        let email = document.getElementById('2')
        let thisInfo = [fullname.value,email.value]
        setInfo(thisInfo)
        
        return nav('/account-info')
    }
    return (
        <div className="md:w-screen flex flex-col " >
            <Toaster/>
            <h1 className="text-2xl font-bold mr-auto " >Create your </h1>
            <h1 className="text-2xl font-bold mr-auto " >PopX Account</h1>
            {
               overlap.map((ele,i)=>{
                return (<div key={i} className="relative mt-6">
  <input
    id={i}
    placeholder={placeholders[i]}
    onClick={handleInputOnclick}
    className="h-13 w-full border border-[#ccc] rounded-md pl-5 focus:outline-none focus:ring-0 text-base"
    style={{ lineHeight: "3.25rem" }} 
  />
<div className="absolute -top-3 left-4 flex items-center gap-1 pointer-events-none bg-gray-100 px-1">
  <p className="text-purple-900 text-sm">{overlap[i]}</p>
  <span className="text-red-500">*</span>
</div>

</div>

            )
               })
            }
          <div className="flex flex-col items-start" >
             <div className="flex items-center gap-1">
                <p className="font-bold mt-5" > Are You an Agency</p>  <span className="text-red-500">*</span>
             </div>
            <div className="flex gap-5 mt-3" >
         <label>
            <input className="scale-150" id="yes" type="radio" name="plan" value="Yes" />   Yes
        </label>
        <label>
            <input className="scale-150" id="no" type="radio" name="plan" value="No" />   No
        </label>
        </div>
          </div>
          <Rectangle text="Create Account" className="text-white bg-[#6c25ff]" onClick={handleSubmit}/>

        </div>
    )
} 
export default CreateAccount
