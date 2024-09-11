import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import React from "react";
import SearchBox from "./SearchBox";

const Header = () => {
    const user = useSelector(store => store.user);
    const { signOut } = useAuth();

    const handleSignOut = () => {
        signOut().then()
    }
    return (
        <div className="fixed top-0 flex justify-between w-full px-6 py-4 pb-10 bg-gradient-to-b from-black z-10">
            <h1 className="w-24">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </h1>

            {user && <div className="flex justify-end items-center space-x-3 text-white font-bold">
                <SearchBox />
                {user?.photoURL && <img className="size-7" src={user?.photoURL} alt={user?.displayName} title={user?.displayName} />}
                {/* {user?.email && <p>{user?.displayName}</p>} */}
                <button className="bg-red-800 px-3 py-1 rounded-sm text-md font-normal" onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default React.memo(Header);