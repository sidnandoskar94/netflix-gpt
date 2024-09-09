import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "./Header";
import UserForm from "./UserForm";

const Login = () => {
    const navigate = useNavigate();
    const { signIn, loading, error: authError } = useAuth();
    const handleLogin = (email, password) => {
        signIn(email, password).then(() => navigate('/browse'));
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
                w-1/3
                h-min
                -translate-x-1/2
                -translate-y-1/2
                rounded-md
                ">
                <h1 className="text-white mb-8 text-3xl font-medium">Sign In</h1>
                {loading && <p className="text-white">Signing in...</p>}
                <UserForm handleSubmit={handleLogin} formType='login' />
                {authError && <p className="text-red-500 mb-2">{authError.message || String(authError)}</p>}
                <p className="text-white text-sm">Don&apos;t have an account? <Link to="/register"><span className="font-bold hover:underline">Sign Up</span></Link></p>
            </div>
        </>
    )
}

export default Login