import { useNavigate } from "react-router-dom"
import Rectangle from "../components/rectangular-buttonComponent"

const LandPage = ()=>{
    let nav = useNavigate()
    return (
       <div className="relative min-h-screen bg-gray-100" >
        <section className="  absolute bottom-10 md:left-1/2 md:-translate-x-1/2 ">
        <div className="text-left">
                 <div className="" >
                    <h1 className="text-2xl font-bold" >Welcome to PopX</h1>
                 <p className="text-gray-500 mt-2" >Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div className="" >
                    <Rectangle onClick={()=>nav('/create-account')} text="Create Account" className={`bg-[#6c25ff] text-white  `} />
                    <Rectangle onClick={()=>nav('/sign-in')} text="Already Registered? Login" className={`bg-[#6c25ff4b] text-black `} />
                 </div>
        </div>
        </section>
       </div>
    )
}
export default LandPage