const Rectangle =({text,className,onClick})=>{
    return (
        <div onClick={onClick} className={ `${className}` +  ` m-0 h-11 text-center flex items-center justify-center bg-[#6c25ff4b] md:w-screen  rounded-md my-3 p-0 max-w-[350px]`} >
            <p>{text}</p>
        </div>
    )
}
export default Rectangle