import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const user = useSelector(store => store.user);
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut().then(() => navigate("/"))
    }
    return (
        <div className="absolute flex justify-between w-full px-6 py-4 bg-gradient-to-b from-black">
            <h1 className="w-28">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </h1>
            {user && <div className="flex justify-end items-center space-x-2 text-white font-bold">
                {user?.photoURL && <img className="size-8" src={user?.photoURL} alt="User" />}
                {user?.email && <p>{user?.email}</p>}
                <button onClick={handleSignOut}>[Sign Out]</button>
            </div>}
        </div>
    )
}

export default Header