import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import UserForm from "./UserForm";

const Register = () => {
    const { signUp, loading, error: authError } = useAuth();
    const [formError, setFormError] = useState({ error: false });

    const handleRegister = (email, password) => {
        const validation = checkValidData(email, password);
        if (!validation.error) {
            signUp(email, password).then();
        }
        setFormError(validation);
    }

    return (
        <>
            <Header />
            <div>
                <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg" alt="" />
            </div>
            <div
                className="absolute 
                inset-x-1/2 
                inset-y-1/2 
                px-12 py-16 
                bg-black 
                bg-opacity-80
                max-w-full
                w-[90%]
                md:w-1/3
                h-min
                -translate-x-1/2
                -translate-y-1/2
                rounded-md
                ">
                <h1 className="text-white mb-8 text-3xl font-medium">Sign Up</h1>
                {loading && <p className="text-white">Signing up...</p>}
                <UserForm handleSubmit={handleRegister} formType='signup' />
                {formError?.error && formError?.message && <p className="text-red-500 mb-2">{formError?.message}</p>}
                {authError && <p className="text-red-500 mb-2">{authError.message || String(authError)}</p>}
                <p className="text-white text-sm">Already have an account? <Link to="/"><span className="font-bold hover:underline">Login</span></Link></p>
            </div>
        </>
    )
}

export default Register