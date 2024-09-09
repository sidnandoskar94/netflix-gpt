import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseAuth } from "../config/firebase";
import auth from '../service/auth/Auth';
import { loginUser, logoutUser } from '../store/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                dispatch(loginUser({ uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email }));
                console.log("UserData: ", user);
                navigate("/browse");
            } else {
                dispatch(logoutUser());
                console.log("User signed out!");
                if (location.pathname !== '/register') {
                    navigate("/")
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        setLoading(true);
        setError(null);
        return auth.signUp(email, password)
            .then((user) => {
                const userName = email.split('@')[0];
                const photoUrl = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
                auth.updateUserProfile(user, userName, photoUrl)
                    .then(() => {
                        dispatch(loginUser({ uid: user.uid, displayName: userName, photoURL: photoUrl, email: user.email }));
                        console.log("User profile updated!");
                    })
                    .catch(setError)
                    .finally(() => setLoading(false));
                return user;
            })
            .catch(setError)
            .finally(() => setLoading(false));
    };

    const signIn = (email, password) => {
        setLoading(true);
        setError(null);
        return auth.signIn(email, password)
            .then(() => true)
            .catch(setError)
            .finally(() => setLoading(false));
    };

    const signOut = () => {
        setLoading(true);
        setError(null);
        return auth.signOut()
            .then(() => true)
            .catch(setError)
            .finally(() => setLoading(false));
    };

    return { signUp, signIn, signOut, loading, error };
};

export default useAuth;