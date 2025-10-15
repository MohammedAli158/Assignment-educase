import { useNavigate } from "react-router-dom";
import Rectangle from "../components/rectangular-buttonComponent";
import { useState } from "react";

const SignIn = () => {
  const overlap = ["Email Address", "Password"];
  const placeholders = ["Enter Email Address", "Enter Password"];
  const nav = useNavigate();

  // controlled inputs (safer than getElementById)
  const [form, setForm] = useState({ 0: "", 1: "" });
  const [isAbleToLogin, setIsAbleToLogin] = useState(false);

  const handleInputChange = (e, i) => {
    const newForm = { ...form, [i]: e.target.value };
    setForm(newForm);
    setIsAbleToLogin(newForm[0].trim() !== "" && newForm[1].trim() !== "");
  };

  return (
    // container centered on screen, but content inside is left aligned
    <div className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col">
      {/* headings - left aligned */}
      <div className="text-left">
        <h1 className="font-bold text-2xl">Sign In to your</h1>
        <h1 className="font-bold text-2xl mb-2">PopX Account</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* inputs block */}
      <div className="mt-6 space-y-6">
        {overlap.map((_, i) => (
          <div key={i} className="relative">
            {/* input: full width of its container but capped via max-w */}
            <input
              id={`input-${i}`}
              value={form[i]}
              onChange={(e) => handleInputChange(e, i)}
              placeholder={placeholders[i]}
              className="block w-full max-w-[350px] h-[52px] border border-[#ccc] rounded-md pl-5 pr-3 focus:outline-none focus:ring-0 text-base"
              style={{ lineHeight: "1.25rem" }}
            />

            {/* floating label (absolute relative to this wrapper) */}
            <div className="absolute -top-3 left-4 flex items-center gap-1 pointer-events-none bg-gray-100 px-1">
              <p className="text-purple-900 text-sm">{overlap[i]}</p>
              <span className="text-red-500">*</span>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="mt-6">
        <Rectangle
          text={"Login"}
          onClick={()=>nav('/account-info')}
          className={`${
            isAbleToLogin ? "bg-[#6c25ff] text-white" : "bg-gray-300 text-white opacity-60 cursor-not-allowed"
          }`}
        />
      </div>
    </div>
  );
};

export default SignIn;
